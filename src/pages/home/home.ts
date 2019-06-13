import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { RegisterContactPage } from "../register-contact/register-contact";
import { RegisterContactCompanyPage } from "../register-contact-company/register-contact-company";
import { ContactDetailsPage } from "../contact-details/contact-details";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { LoadingServiceProvider } from "../../providers/loading-service/loading-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  personList: any;
  companyList: any;

  constructor(
    public navCtrl: NavController,
    private contactService: ContactServiceProvider,
    private loadingService: LoadingServiceProvider,
    private toastService: ToastServiceProvider
  ) {}

  ionViewDidLoad() {
    this.getPersonContacts();
    this.getCompanyContacts();
  }

  getPersonContacts() {
    this.contactService.getPersonList().subscribe(
      (data: any) => {
        this.personList = data.person;
        console.log(this.personList);
      },
      error => {
        this.toastService.present({
          message: "Erro ao carregar contatos"
        });
        console.log("error: ", error);
      }
    );
  }

  getCompanyContacts() {
    this.contactService.getCompanyList().subscribe(
      (data: any) => {
        this.companyList = data.company;
        console.log(this.companyList);
      },
      error => {
        this.toastService.present({
          message: "Erro ao carregar contatos"
        });
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

  contactDetailsPage() {
    this.navCtrl.push(ContactDetailsPage);
  }
}
