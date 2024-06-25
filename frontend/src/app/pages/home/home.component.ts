import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';
import { HomeService } from '../../services/api/home/home.service';
import { Banner } from '../../models/banner';
import { ClientReview } from '../../models/client-review';
import { Client } from '../../models/client';
import { Post } from '../../models/post';
import { Profile } from '../../models/profile';
import { Service } from '../../models/service';
import { CompanyInformation } from '../../models/company-information';
import { Gallery } from '../../models/gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true

  banners: Banner[] = []
  clientReviews: ClientReview[] = []
  clients: Client[] = []
  posts: Post[] = []
  profiles: Profile[] = []
  services: Service[] = []
  recommendedPosts: Post[] = []
  companyInformation!: CompanyInformation
  galleris: Gallery[] = []

  constructor(
    private homeService: HomeService,
    public settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.getHomeData()
  }

  getHomeData() {
    this.isLoading = true
    this.homeService.getHomeData()
      .then(response => {
        this.banners = response.data.banners
        this.clientReviews = response.data.client_reviews
        this.clients = response.data.clients
        this.posts = response.data.posts
        this.profiles = response.data.profiles
        this.services = response.data.services
        this.recommendedPosts = response.data.recommended_posts
        this.companyInformation = response.data.company_information
        this.galleris = response.data.galleries
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

}
