import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactServiceProvider {
  baseUrl = "http://localhost:3000/contacts/";

  constructor(public http: HttpClient) {}

  getPersonList() {
    const url = this.baseUrl + "get-person";
    return this.http.get(url);
  }

  getCompanyList() {
    const url = this.baseUrl + "get-company";
    return this.http.get(url);
  }

  getAllContactsList() {
    const url = this.baseUrl + "get-allcontacts";
    return this.http.get(url);
  }

  registerPerson(person) {
    const url = this.baseUrl + "register-person";
    return this.http.post(url, { person });
  }

  registerCompany(company) {
    const url = this.baseUrl + "register-company";
    return this.http.post(url, { company });
  }

  updatePerson(person) {
    const url = this.baseUrl + "update-person/" + person.id;
    return this.http.put(url, { person });
  }

  updateCompany(company) {
    const url = this.baseUrl + "update-company/" + company.id;
    return this.http.put(url, { company });
  }

  deletePerson(personId) {
    const url = this.baseUrl + "delete-person/" + personId;
    return this.http.delete(url);
  }

  deleteCompany(companyId) {
    const url = this.baseUrl + "delete-company/" + companyId;
    return this.http.delete(url);
  }
}
