import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('contact') contactElement!: ElementRef;
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  sendButtonVal: string = 'Send message :)';
  emailSend: boolean = false;

  myFormValid = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  get name() { return this.myFormValid.get('name'); }
  get email() { return this.myFormValid.get('email'); }
  get message() { return this.myFormValid.get('message'); }

  async sendMail() {
    let contactElements = this.contactElementsDeclaration();
    this.disableElements(contactElements);
    this.showSendAnimation();
    await this.sendFormData(this.getFormData(contactElements));
    this.sendButtonVal = 'Message was send :)';
  }


  contactElementsDeclaration() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    return [nameField, emailField, messageField, sendButton];
  }


  disableElements(contactElements) {
    contactElements.forEach(contactElement => {
      contactElement.disabled = true;
    });
  }


  showSendAnimation() {
    this.emailSend = true;
  }


  getFormData(contactElements){
    let fd = new FormData();
    fd.append('name', contactElements[0].value);
    fd.append('email', contactElements[1].value);
    fd.append('message', contactElements[2].value);
    return fd;
  }


  async sendFormData(fd:FormData){
  await fetch("https://philipp-randau.developerakademie.net/send_mail/send_mail.php",
    {
      method: 'POST',
      body: fd
    }
  );
}
}
