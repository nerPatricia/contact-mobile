import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { LoadingServiceProvider } from "../../providers/loading-service/loading-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";

@Component({
  selector: "page-contact-details",
  templateUrl: "contact-details.html"
})
export class ContactDetailsPage {
  contactData: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contactService: ContactServiceProvider,
    private loadingService: LoadingServiceProvider,
    private toastService: ToastServiceProvider
  ) {
    this.contactData = this.navParams.get("contact");
  }

  ionViewDidLoad() {}

  deletePerson() {}

  confirmUpdatePerson() {
    this.contactService.updatePerson(this.contactData).subscribe(
      async (response: any) => {
        this.toastService.present({
          message: "Contato atualizado com sucesso."
        });
      },
      error => {
        console.log("updatecontact error: ", error);
      }
    );
  }
}
