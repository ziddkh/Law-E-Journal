import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  async getProfiles(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/profiles`)
  }

  async getProfile(id: number): Promise<any> {
    return await axios.get(`${environment.api_url}/profiles/${id}`)
  }
}
