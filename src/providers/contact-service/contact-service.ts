import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactServiceProvider {
  baseUrl = "http://localhost:3000/contacts/";

  constructor(public http: HttpClient) {}

  getPersonList() {
    const url = this.baseUrl + "get-person";
    console.log(url);
    return this.http.get(url);
  }

  getCompanyList() {
    const url = this.baseUrl + "get-company";
    return this.http.get(this.baseUrl);
  }

  registerPerson(person: any) {
    const url = this.baseUrl + "register-person";
    return this.http.post(url, person);
  }

  registerCompany(company: any) {
    const url = this.baseUrl + "register-company";
    return this.http.post(url, company);
  }

  // updatePerson(person) {
  //   return this.http.put(url, person);
  // }

  // updateCompany() {
  //   const url = this.baseUrl + "/register-company";
  //   return this.http.put(this.baseUrl);
  // }

  // deletePerson() {
  //   return this.http.delete(this.baseUrl);
  // }

  // deleteCompany() {
  //   return this.http.delete(this.baseUrl);
  // }
}
