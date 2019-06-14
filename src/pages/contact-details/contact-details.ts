import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
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
    private toastService: ToastServiceProvider,
    private alertCtrl: AlertController
  ) {
    this.contactData = this.navParams.get("contact");
  }

  ionViewDidLoad() {}

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

  askDelete() {
    let alert = this.alertCtrl.create({
      title: "Cancelar",
      message: "Tem certeza que deseja apagar esse contato?",
      buttons: [
        {
          text: "Não",
          handler: () => {}
        },
        {
          text: "Sim",
          handler: () => {
            this.deletePerson();
          }
        }
      ]
    });
    alert.present();
  }

  deletePerson() {
    this.contactService.deletePerson(this.contactData.id).subscribe(
      async (response: any) => {
        this.toastService.present({
          message: "Contato apagado com sucesso."
        });
      },
      error => {
        console.log("deletecontact error: ", error);
      }
    );
  }
}
