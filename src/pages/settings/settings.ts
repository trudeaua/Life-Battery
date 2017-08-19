import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { DataSharingService } from "../../shared/data-sharing.service";

import { UserInformation } from "../../models/user-info.model";
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  allCountries: any;
  birthday: { day: number, month: number, year: number };
  currentDate: string;
  lifeExpectancy: number;
  genders: any[];
  selectedCountryId: number;
  userBirthday: string;
  userGender: string;
  constructor(private dataSharing: DataSharingService, private storage: Storage, private viewCtrl: ViewController) {
    let date = new Date();
    this.allCountries = this.dataSharing.getCountries();
    this.genders = dataSharing.getGenders();
    let dateString = date.toISOString();
    this.currentDate = dateString.slice(0, dateString.indexOf('T'));
    this.storage.get('userInfo').then((userInfo) => {
      if (userInfo) {
        this.userBirthday = userInfo.birthday;
        this.userGender = userInfo.gender;
        let userInformation = new UserInformation(userInfo.gender, userInfo.birthday, userInfo.lifeExpectancy, userInfo.country);
        let birthdayTemp = userInformation.birthday;
        this.lifeExpectancy = userInfo.lifeExpectancy;
        let selectedCountry = dataSharing.getCountryByName(userInfo.country);
        this.selectedCountryId = selectedCountry.id;
        console.log(this.selectedCountryId);
        let a = birthdayTemp.split('-');
        this.birthday = {
          day: Number.parseInt(a[2]),
          month: Number.parseInt(a[1]),
          year: Number.parseInt(a[0])
        }
      }
    }).catch(err => console.log(err));
  }
  /**
   * close the settings modal
   */
  closeModal() {
    this.viewCtrl.dismiss();
  }
  /**
   * save the user's information
   */
  saveSettings() {
    let selectedCountry = this.dataSharing.getCountryById(this.selectedCountryId);
    console.log(selectedCountry);
    if (this.userBirthday && selectedCountry && this.userGender) {
      this.lifeExpectancy = selectedCountry[this.userGender];
      let userInfo = new UserInformation(this.userGender, this.userBirthday, this.lifeExpectancy, selectedCountry.country);
      this.storage.set('userInfo', userInfo).then(() => {
        this.closeModal();
      }).catch(err => console.log(err));
    }
  }

}
