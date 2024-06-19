import { Injectable } from '@angular/core';
import { Setting } from '../../models/setting';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  constructor() { }

  setSettings(settings: Setting[]) {
    settings.map((setting) => {
      if (setting.key !== 'Company Logo') {
        sessionStorage.setItem(`${environment.setting_key_identifier}.${setting.key.toLocaleLowerCase().replace(' ', '_')}`, setting.value)
      } else {
        sessionStorage.setItem(`${environment.setting_key_identifier}.${setting.key.toLocaleLowerCase().replace(' ', '_')}`, setting.signed_image_url ?? 'null')
      }
    })
  }

  getEmail() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.email`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.email`) : null
  }

  getTwitter() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.twitter`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.twitter`) : null
  }

  getInstagram() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.instagram`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.instagram`) : null
  }

  getCompanyLogo() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.company_logo`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.company_logo`) : null
  }

  getPhoneNumber() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.phone_number`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.phone_number`) : null
  }

  getYoutube() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.youtube`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.youtube`) : null
  }

  getAddress() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.address`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.address`) : null
  }

  getGoogleMap() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.google_map`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.google_map`) : null
  }

  getCompanyName() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.company_name`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.company_name`) : null
  }

  getTikTok() {
    return sessionStorage.getItem(`${environment.setting_key_identifier}.tik-tok`) !== 'null' ? sessionStorage.getItem(`${environment.setting_key_identifier}.tik-tok`) : null
  }
}
