import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { LoadingServiceProvider } from "../../providers/loading-service/loading-service";
import { ToastServiceProvider } from "../../providers/toast-service/toast-service";

@Component({
  selector: "page-register-contact-company",
  templateUrl: "register-contact-company.html"
})
export class RegisterContactCompanyPage {
  contactData: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contactService: ContactServiceProvider,
    private loadingService: LoadingServiceProvider,
    private toastService: ToastServiceProvider
  ) {}

  ionViewDidLoad() {}

  confirmRegisterCompany() {
    this.loadingService.present();

    console.log(this.contactData);

    this.contactService.registerCompany(this.contactData).subscribe(
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
