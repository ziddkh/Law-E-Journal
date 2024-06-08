import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientReviewService {

  constructor() { }

  async getClientReviews(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/client-reviews`, { params })
  }
}
