import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-contact-details",
  templateUrl: "contact-details.html"
})
export class ContactDetailsPage {
  contactData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactDetailsPage");
  }
}
