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

  async getArticles(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/posts/get-articles`, { params })
  }

  async getNews(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/posts/get-news`, { params })
  }

  async getMedia(params: any = {}): Promise<any> {
    return await axios.get(`${environment.api_url}/posts/get-media`, { params })
  }

  async getPost(slug: string): Promise<any> {
    return await axios.get(`${environment.api_url}/posts/show`, {
      params: {slug}
    })
  }
}
