import { Contact } from './contact.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly API = "http://localhost:3000/contacts";

  constructor(private http: HttpClient) { }

  listContacts(){
    return this.http.get<Contact[]>(this.API)
  }

  submitContact(contact: Contact) {
    return this.http.post(this.API, contact)
  }

}
