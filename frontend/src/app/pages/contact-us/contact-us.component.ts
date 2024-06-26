import { Component } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';
import { ConsultationRequestService } from '../../services/api/consultation-request/consultation-request.service';
import { ConsultationRequest } from '../../models/consultation-request';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  isSending: boolean = false
  successMessage: string = ''
  form: ConsultationRequest = {
    name: '',
    email: '',
    phone_number: '',
    message: '',
  }

  constructor(
    public settingService: SettingService,
    private consultationRequestService: ConsultationRequestService,
    private sanitizer: DomSanitizer,
  ) {}

  sendMessage() {
    this.isSending = true
    this.consultationRequestService.submitRequest(this.form)
      .then(response => {
        console.log(response)
        this.form = {
          name: '',
          email: '',
          phone_number: '',
          message: '',
        }
        this.displaySuccessMessage("Berhasil untuk mengirim pesan!")
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isSending = false
      })
  }

  displaySuccessMessage(message: string, duration: number = 3000) {
    this.successMessage = message
    setTimeout(() => {
      this.successMessage = ''
    }, duration)
  }

  googleMapUrl(url: string | null) {
    if (url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return false
  }
}
