import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()
export class LoadingServiceProvider {
  loadingIndicator;

  constructor(private loadingCtrl: LoadingController) {}

  present({ content = "Aguarde...", spinner = "dots" } = {}) {
    if (this.loadingIndicator) {
      this.dismiss();
    }

    this.loadingIndicator = this.loadingCtrl.create({
      content,
      spinner
    });

    this.loadingIndicator.present();
  }

  dismiss() {
    if (!this.loadingIndicator) {
      return;
    }

    this.loadingIndicator.dismiss();
  }
}
