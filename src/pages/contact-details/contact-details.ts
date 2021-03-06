import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";
import Swal from "sweetalert2";

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
    private toastService: ToastServiceProvider,
    private alertCtrl: AlertController,
    private callNumber: CallNumber
  ) {
    this.contactData = this.navParams.get("contact");
  }

  ionViewDidLoad() {}

  confirmUpdatePerson() {
    if (
      !this.contactData.name &&
      !this.contactData.phone &&
      !this.contactData.email &&
      !this.contactData.birthday &&
      !this.contactData.cpf &&
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

    this.contactService.updatePerson(this.contactData).subscribe(
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
        this.navCtrl.pop();
      },
      error => {
        this.toastService.present({
          message: "Ocorreu um erro ao apagar contato."
        });
        console.log("deletecontact error: ", error);
      }
    );
  }

  call(phone) {
    this.callNumber
      .callNumber("0" + phone, true)
      .then(res => console.log("yay!", res))
      .catch(err => {
        this.toastService.present({
          message: "Só é possivel realizar ligações com o app no celular."
        });
      });
  }

  message() {
    this.toastService.present({
      message: "Clicou aqui xD"
    });
  }
}
