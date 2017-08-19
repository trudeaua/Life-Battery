import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { UserInformation } from "../../models/user-info.model";
import { WelcomePage } from "../welcome/welcome";
import { SettingsPage } from "../settings/settings";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  birthday: { month: number, day: number, year: number };
  currentAge: number;
  enableBatteryVisibility: boolean;
  lifeExpectancy: number;
  percentageRemaining: number;
  userGender: string;
  yearsRemaining: number;
  constructor(private modalCtrl: ModalController, public navCtrl: NavController, private storage: Storage) {
    this.enableBatteryVisibility = false;
    document.addEventListener('resume', getUserInfo, false);
    var self = this;
    function getUserInfo() {
      self.getUserInfo();
    }
  }
  /**
   * if the welcome screen hasn't been presented, present it, else run normally
   */
  ionViewDidLoad() {
    this.setBatteryDimensions();
    this.storage.get('welcomeScreen:presented').then((val: boolean) => {
      if (!val) this.presentModal();
      else {
        this.enableBatteryVisibility = true;
        this.getUserInfo();
      }
    }).catch(err => console.log(err));;
  }
  /**
   * present the welcome screen to get user's information
   */
  presentModal() {
    let modal = this.modalCtrl.create(WelcomePage);
    modal.present();
    modal.onWillDismiss(() => {
      this.getUserInfo();
    });
    modal.onDidDismiss(() => {
      this.enableBatteryVisibility = true;
    });
  }
  /**
   * get user's information from storage
   */
  getUserInfo() {
    this.storage.get('userInfo').then((userInfo: any) => {
      console.log(userInfo);
      let userInformation = new UserInformation(userInfo.gender, userInfo.birthday, userInfo.lifeExpectancy, userInfo.country);
      this.birthday = userInformation.getBirthdayObj();
      console.log(this.birthday);
      this.userGender = userInfo.gender;
      this.lifeExpectancy = userInformation.lifeExpectancy;
      this.calcCurrentAge();
    }).catch(err => console.log(err));;
  }
  /**
   * calculate user's current age
   */
  calcCurrentAge() {
    let currentDate = new Date();
    let dayOfMonthNum = currentDate.getDate();
    let monthNum = currentDate.getMonth();
    let yearNum = currentDate.getFullYear();

    let numLeapYears = 0;
    for (let i = 0; i < yearNum - this.birthday.year; i++) {
      if (this.leapYear(this.birthday.year + i)) {
        numLeapYears++;
      }
    }
    let birthYears = this.birthday.year + this.birthday.month / 12 + (this.birthday.day + numLeapYears) / 365;
    let currentYears = yearNum + monthNum / 12 + dayOfMonthNum / 365;
    this.currentAge = currentYears - birthYears;
    this.howManyYearsLeft();
  }
  /**
   * check if a given year is a leap year or not
   * @param year input year
   */
  leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
  /**
   * calculate number of years left in life (based on average human life)
   */
  howManyYearsLeft() {
    this.yearsRemaining = this.lifeExpectancy - this.currentAge;
    console.log(this.yearsRemaining);
    this.yearsRemainingToBatteryPercent();
  }
  /**
   * calculate percentage of 'battery' remaining
   */
  yearsRemainingToBatteryPercent() {
    this.percentageRemaining = this.yearsRemaining / this.lifeExpectancy;
    if (this.percentageRemaining > 1) {
      this.percentageRemaining = 1;
    }
    var percentColors = [
      { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
      { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
      { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } }];

    var getColorForPercentage = function (pct) {
      for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
          break;
        }
      }
      var lower = percentColors[i - 1];
      var upper = percentColors[i];
      var range = upper.pct - lower.pct;
      var rangePct = (pct - lower.pct) / range;
      var pctLower = 1 - rangePct;
      var pctUpper = rangePct;
      var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
      };
      return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
      // or output as hex if preferred
    }
    if (this.percentageRemaining >= 0) {

      document.getElementById('battery-status').style.backgroundColor = getColorForPercentage(this.percentageRemaining);
      document.getElementById('battery-status').style.height = (Number.parseInt(document.getElementById('battery').style.height.match(/\d+/)[0]) - 25) * this.percentageRemaining + 'px';

      console.log(this.percentageRemaining);
      document.getElementById('percentage-remaining').innerHTML = (this.percentageRemaining * 100).toFixed(2) + '%';
      document.getElementById('years-remaining').innerHTML = 'You have approximately ' + this.formatYearsAsDateString(this.yearsRemaining) + ' remaining in your life.'
    }
    else {
      document.getElementById('battery-status').style.height = '0px';
      document.getElementById('percentage-remaining').innerHTML = '0%';
      document.getElementById('years-remaining').innerHTML = "Congratulations! You've lived longer than the average human for your gender.<br><br>Now it's just a waiting game.";
    }
  }
  /**
   * sets the battery image's dimensions
   */
  setBatteryDimensions() {
    document.getElementById('battery').style.width = screen.width / 2 + 'px';
    document.getElementById('battery').style.height = screen.height / 2 + 'px';
    console.log(document.getElementById('battery').style);
    document.getElementById('battery-status').style.width = (Number.parseInt(document.getElementById('battery').style.width.match(/\d+/)[0]) - 25) + 'px';
    document.getElementById('battery-tip').style.width = (Number.parseInt(document.getElementById('battery').style.width.match(/\d+/)[0]) / 2) + 'px';
    document.getElementById('battery-tip').style.height = (Number.parseInt(document.getElementById('battery').style.height.match(/\d+/)[0]) / 14) + 'px';
  }
  /**
   * convert number of years into a human readable date string
   * @param totalYears number of years
   */
  formatYearsAsDateString(totalYears: number) {
    let years = Math.floor(totalYears);
    let months = Math.floor((totalYears - years) * 12);
    let weeks = Math.floor((totalYears - years) * 12 * 4);
    let days = Math.floor((totalYears - years) * 12 * 4 * 7);
    return years + ' years, ' + months + ' months, ' + weeks + ' weeks, and ' + days + ' days ';
  }
  /**
   * open a modal to change user settings
   */
  changeSettings() {
    let modal = this.modalCtrl.create(SettingsPage);
    modal.onWillDismiss(() => {
      this.getUserInfo();
    });
    modal.present();
  }
}
