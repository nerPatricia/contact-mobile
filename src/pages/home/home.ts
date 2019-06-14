import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { RegisterContactPage } from "../register-contact/register-contact";
import { RegisterContactCompanyPage } from "../register-contact-company/register-contact-company";
import { ContactDetailsPage } from "../contact-details/contact-details";
import { ContactDetailsCompanyPage } from "../contact-details-company/contact-details-company";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  personList: any;
  companyList: any;
  allcontactsList: any;

  constructor(
    public navCtrl: NavController,
    private contactService: ContactServiceProvider,
    private toastService: ToastServiceProvider,
    private callNumber: CallNumber
  ) {}

  ionViewWillEnter() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAllContactsList().subscribe(
      (data: any) => {
        this.allcontactsList = data.allcontacts;
      },
      error => {
        console.log("error: ", error);
      }
    );
  }

  registerContactPage() {
    this.navCtrl.push(RegisterContactPage);
  }

  registerContactCompanyPage() {
    this.navCtrl.push(RegisterContactCompanyPage);
  }

  contactDetailsPage(contact) {
    if (contact.type == "person") {
      this.navCtrl.push(ContactDetailsPage, { contact });
    } else {
      this.navCtrl.push(ContactDetailsCompanyPage, { contact });
    }
  }

  call(phone) {
    this.callNumber
      .callNumber("0" + phone, true)
      .then(res => console.log("yay!", res))
      .catch(err => {
        this.toastService.present({
          message: "Você só pode realizar ligações com o app no seu celular."
        });
      });
  }
}
