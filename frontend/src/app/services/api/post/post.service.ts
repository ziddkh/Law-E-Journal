import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  async getPosts(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/posts`, { params })
  }

  async getPost(id: number): Promise<any> {
    return await axios.get(`${environment.api_url}/posts`, {
      params: {id}
    })
  }
}
