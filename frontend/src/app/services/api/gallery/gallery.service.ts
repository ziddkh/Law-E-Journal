import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  async getGalleries(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/galleries`, { params })
  }
}
