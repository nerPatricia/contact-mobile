import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-register-contact-company",
  templateUrl: "register-contact-company.html"
})
export class RegisterContactCompanyPage {
  contactData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterContactCompanyPage");
  }
}
