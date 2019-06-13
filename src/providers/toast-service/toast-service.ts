import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastServiceProvider {
  constructor(private toastCtrl: ToastController) {}

  private toast;

  present({ message, duration = 3000, position = "bottom", options = {} }) {
    if (this.toast) this.toast.dismiss();

    this.toast = this.toastCtrl.create({
      message,
      duration,
      position,
      ...options
    });

    this.toast.present();
  }
}
