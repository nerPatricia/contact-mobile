import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";
import Swal from "sweetalert2";

@Component({
  selector: "page-contact-details-company",
  templateUrl: "contact-details-company.html"
})
export class ContactDetailsCompanyPage {
  contactData: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contactService: ContactServiceProvider,
    private toastService: ToastServiceProvider,
    private alertCtrl: AlertController
  ) {
    this.contactData = this.navParams.get("contact");
  }

  ionViewDidLoad() {}

  confirmEditCompany() {
    if (
      !this.contactData.name &&
      !this.contactData.socialname &&
      !this.contactData.phone &&
      !this.contactData.email &&
      !this.contactData.birthday &&
      !this.contactData.cnpj &&
      !this.contactData.address.street &&
      !this.contactData.address.number &&
      !this.contactData.address.complement &&
      !this.contactData.address.zipcode &&
      !this.contactData.address.district &&
      !this.contactData.address.city &&
      !this.contactData.address.state
    ) {
      Swal.fire({
        title: "Atenção",
        text: "Você não pode salvar um contato vazio.",
        type: "warning",
        backdrop: true,
        confirmButtonText: "OK"
      });
      return;
    }

    this.contactService.updateCompany(this.contactData).subscribe(
      async (response: any) => {
        this.toastService.present({
          message: "Contato atualizado com sucesso."
        });
      },
      error => {
        this.toastService.present({
          message: "Ocorreu um erro ao salvar contato."
        });
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
            this.deleteCompany();
          }
        }
      ]
    });
    alert.present();
  }

  deleteCompany() {
    this.contactService.deleteCompany(this.contactData.id).subscribe(
      async (response: any) => {
        this.toastService.present({
          message: "Contato apagado com sucesso."
        });
      },
      error => {
        this.toastService.present({
          message: "Ocorreu um erro ao apagar contato."
        });
        console.log("deletecontact error: ", error);
      }
    );
  }
}
