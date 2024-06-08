import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { }

  async getSettings(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/contact-us`, { params })
  }
}
