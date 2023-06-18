import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  myFormValid = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  get name() { return this.myFormValid.get('name'); }
  get email() { return this.myFormValid.get('email'); }
  get message() { return this.myFormValid.get('message'); }


  async sendMail() {
    console.log('sendmail', this.myForm);
    console.warn(this.myFormValid.value);
    // let nameField = this.nameField.nativeElement;
    // let emailField = this.nameField.nativeElement;
    // let messageField = this.nameField.nativeElement;
    // let sendButton = this.nameField.nativeElement;
    // nameField.disabled = true;
    // emailField.disabled = true;
    // messageField.disabled = true;
    // sendButton.disabled = true;
    // // animation anzeigen

    // let formData = new FormData();
    // formData.append('name', nameField.value);
    // formData.append('email', emailField.value);
    // formData.append('message', messageField.value);
    // // senden
    // fetch("https://philipp-randau.developerakademie.net/Send_Mail/send_mail.php"),
    // {
    //   method: 'Post',
    //   body: formData
    // }
    // // Text anzeigen: Nachricht gesendet
    // nameField.disabled = false;
    // emailField.disabled = false;
    // messageField.disabled = false;
    // sendButton.disabled = false;
  }
}
