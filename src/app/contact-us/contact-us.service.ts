import { Injectable } from '@angular/core';
import { ContactUs } from './contact-usInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private _contactUs = new BehaviorSubject<ContactUs>({
    // tslint:disable-next-line:max-line-length
    honeypot: '', firstName: '', lastName: '', mobile: '', email: '', message: ''
  });

  customerInfo$ = this._contactUs.asObservable();

  constructor() { }

}
