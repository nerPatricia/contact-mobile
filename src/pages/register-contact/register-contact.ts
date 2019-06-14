import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { LoadingServiceProvider } from "../../providers/loading-service/loading-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";
import Swal from "sweetalert2";

@Component({
  selector: "page-register-contact",
  templateUrl: "register-contact.html"
})
export class RegisterContactPage {
  contactData: any = {
    name: "",
    phone: "",
    email: "",
    birthday: "",
    cpf: "",
    type: "",
    address: {
      street: "",
      number: "",
      complement: "",
      zipcode: "",
      district: "",
      city: "",
      state: ""
    }
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contactService: ContactServiceProvider,
    private loadingService: LoadingServiceProvider,
    private toastService: ToastServiceProvider
  ) {}

  ionViewDidLoad() {}

  confirmRegisterPerson() {
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
        text: "Você não pode cadastrar um contato vazio.",
        type: "warning",
        backdrop: true,
        confirmButtonText: "OK"
      });
      return;
    }

    this.loadingService.present();

    this.contactData.type = "person";

    this.contactService.registerPerson(this.contactData).subscribe(
      (data: any) => {
        this.loadingService.dismiss();
        return this.toastService.present({
          message: "Contato cadastrado com sucesso."
        });
      },
      error => {
        this.toastService.present({
          message: "Ocorreu um erro ao cadastrar o contato."
        });
        this.loadingService.dismiss();
      }
    );
  }
}
