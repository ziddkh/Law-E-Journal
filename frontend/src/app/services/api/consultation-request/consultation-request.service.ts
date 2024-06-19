import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { ConsultationRequest } from '../../../models/consultation-request';

@Injectable({
  providedIn: 'root'
})
export class ConsultationRequestService {

  constructor() { }

  async submitRequest(data: ConsultationRequest): Promise<any> {
    return await axios.post(`${environment.api_url}/consultation-requests/submit`, data)
  }
}
