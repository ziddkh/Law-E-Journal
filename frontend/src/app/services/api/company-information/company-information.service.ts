import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyInformationService {

  constructor() { }

  async getCompanyInformation(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/about`, { params })
  }
}
