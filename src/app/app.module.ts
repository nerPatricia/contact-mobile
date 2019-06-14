import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { CallNumber } from "@ionic-native/call-number";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { BrMaskerModule } from "brmasker-ionic-3";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { RegisterContactPage } from "../pages/register-contact/register-contact";
import { RegisterContactCompanyPage } from "../pages/register-contact-company/register-contact-company";
import { ContactDetailsPage } from "../pages/contact-details/contact-details";
import { ContactDetailsCompanyPage } from "../pages/contact-details-company/contact-details-company";
import { ContactServiceProvider } from "../providers/contact-service/contact-service";
import { LoadingServiceProvider } from "../providers/loading-service/loading-service";
import { ToastServiceProvider } from "../providers/toast-service/toast-service";

const pages = [
  MyApp,
  HomePage,
  RegisterContactPage,
  RegisterContactCompanyPage,
  ContactDetailsPage,
  ContactDetailsCompanyPage
];

@NgModule({
  declarations: [...pages],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [...pages],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactServiceProvider,
    LoadingServiceProvider,
    ToastServiceProvider
  ]
})
export class AppModule {}
