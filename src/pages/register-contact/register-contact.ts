import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { LoadingServiceProvider } from "../../providers/loading-service/loading-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";

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
    this.loadingService.present();

    this.contactData.type = "person";

    this.contactService.registerPerson(this.contactData).subscribe(
      (data: any) => {
        this.loadingService.dismiss();
        return this.toastService.present({
          message: "Cadastrado com sucesso"
        });
      },
      error => {
        this.toastService.present({
          message: "Erro ao carregar contatos"
        });
        console.log("error: ", error);
        this.loadingService.dismiss();
      }
    );
  }
}
