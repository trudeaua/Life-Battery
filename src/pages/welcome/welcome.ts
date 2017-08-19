import { Component } from '@angular/core';
import { Platform, IonicPage, ViewController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { UserInformation } from "../../models/user-info.model";
import { DataSharingService } from "../../shared/data-sharing.service";

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  userBirthday: string;
  userGender: string;
  currentDate: string;
  allCountries: any;
  lifeExpectancy: number;
  selectedCountryId: number;
  private backButtonUnregister: any;
  genders: any;
  constructor(private dataSharing: DataSharingService, platform: Platform, private storage: Storage, private viewCtrl: ViewController) {
    this.backButtonUnregister = platform.registerBackButtonAction(() => { });
    this.allCountries = this.dataSharing.getCountries();
    this.genders = dataSharing.getGenders();
    let date = new Date();
    let dateString = date.toISOString();
    this.currentDate = dateString.slice(0, dateString.indexOf('T'));
    console.log(this.currentDate);
  }
  ionViewWillLeave() {
    this.backButtonUnregister();
  }
  /**
   * Save the user's information
   */
  saveInfo() {
    let selectedCountry = this.dataSharing.getCountryById(this.selectedCountryId);
    console.log(selectedCountry);
    if (this.userBirthday && selectedCountry && this.userGender) {
      this.lifeExpectancy = selectedCountry[this.userGender];
      let userInfo = new UserInformation(this.userGender, this.userBirthday, this.lifeExpectancy, selectedCountry.country);
      this.storage.set('userInfo', userInfo).then(() => {
        this.storage.set('welcomeScreen:presented', true).then(() => {
          this.viewCtrl.dismiss();
        }).catch(err => console.log(err));;
      }).catch(err => console.log(err));;
    }
  }

}
