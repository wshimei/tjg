import { Component, OnInit } from '@angular/core';
import { ContactUs } from './contact-usInterface';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUs: ContactUs;

  constructor(private _contactUs: ContactUsService) { }

  ngOnInit() {
    this._contactUs.customerInfo$.subscribe(customer => this.contactUs = customer);

      function validEmail(email) { // see:
        const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
      }

      function validateHuman(honeypot) {
        if (honeypot) { // if hidden form filled up
          console.log('Robot Detected!');
          return true;
        } else {
          console.log('Welcome Human!');
        }
      }

      // get all data in form and return object
      function getFormData() {
        // const form = document.getElementById('gform');

        // const elements = form.elements;

        const fields = Object.keys(this.contactUs).filter(function (k) {
          return (this.contactUs[k].name !== 'honeypot');
        }).map(function (k) {
          if (this.contactUs[k].name !== undefined) {
            return this.contactUs[k].name;
            // special case for Edge's html collection
          } else if (this.contactUs[k].length > 0) {
            return this.contactUs[k].item(0).name;
          }
        }).filter(function (item, pos, self) {
          return self.indexOf(item) === pos && item;
        });

        const formData = {};
        fields.forEach(function (name) {
          const element = this.contactUs[name];

          // singular form elements just have one value
          formData[name] = element.value;

          // when our element has multiple items, get their values
          if (element.length) {
            const data = [];
            for (let i = 0; i < element.length; i++) {
              const item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(', ');
          }
        });

        // add form-specific values into the data
        // formData.formDataNameOrder = JSON.stringify(fields);
        // formData.formGoogleSheetName = form.dataset.sheet || 'responses'; // default sheet name
        // formData.formGoogleSendEmail = form.dataset.email || ''; // no email by default

        //   console.log(formData);
        // return formData;
      }

      function handleFormSubmit(event) { // handles form submit without any jquery
        event.preventDefault(); // we are submitting via xhr below
        // const data = getFormData(); // get the values submitted in the form

        // OPTION: Remove this comment to enable SPAM prevention, see README.md
        if (validateHuman(this.contactUs.honeypot)) { // if form is filled, form will not be submitted
          return false;
        }


        if (this.contactUs.email && !validEmail(this.contactUs.email)) { // if email is not valid show error
          const invalidEmail = document.getElementById('email-invalid');
          if (invalidEmail) {
            invalidEmail.style.display = 'block';
            return false;
          }
        } else {
          disableAllButtons(event.target);
          const url = event.target.action; //
          const xhr = new XMLHttpRequest();
          xhr.open('POST', url);
          // xhr.withCredentials = true;
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.onreadystatechange = function () {
            // console.log( xhr.status, xhr.statusText )
            // console.log(xhr.responseText);
            document.getElementById('gform').style.display = 'none'; // hide form
            const thankYouMessage = document.getElementById('thankyou_message');
            if (thankYouMessage) {
              thankYouMessage.style.display = 'block';
            }
            return;
          };
          // url encode form data for sending as post data
          const encoded = Object.keys(this.contactUs).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(this.contactUs[k]);
          }).join('&');
          xhr.send(encoded);
        }
      }

      function loaded() {
        //   console.log("Contact form submission handler loaded successfully.");
        // bind to the submit event of our form
        const form = document.getElementById('gform');
        form.addEventListener('submit', handleFormSubmit, false);
      }
      document.addEventListener('DOMContentLoaded', loaded, false);

      function disableAllButtons(form) {
        const buttons = form.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
      }
  }

}
