export class UserInformation {
    public birthday: string;
    public country: string;
    public gender: string;
    public lifeExpectancy: number;
    constructor(gender: string, birthday: string, lifeExpectancy: number, country: string) {
        this.gender = gender;
        this.birthday = birthday;
        this.lifeExpectancy = lifeExpectancy;
        this.country = country;
    }
    /**
     * return the user's birthday as an object of numbers
     */
    getBirthdayObj() {
        let birthdayObj = {day: null, month: null, year: null};
        let birthdayArr = this.birthday.split('-');
        birthdayObj.year = Number.parseInt(birthdayArr[0]);
        birthdayObj.month = Number.parseInt(birthdayArr[1]);
        birthdayObj.day = Number.parseInt(birthdayArr[2]);
        return birthdayObj;
    }
}