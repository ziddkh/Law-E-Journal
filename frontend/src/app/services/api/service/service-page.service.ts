import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicePageService {

  constructor() { }

  async getServices(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/services`, { params })
  }

  async getService(slug: string): Promise<any> {
    return await axios.get(`${environment.api_url}/services/detail/${slug}`);
  }
}
