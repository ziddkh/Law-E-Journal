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
import { Dialog } from '@angular/cdk/dialog';
import { ImageDialogComponent } from '../../components/image-dialog/image-dialog.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);
  isLoading: boolean = true

  banners: Banner[] = []
  clientReviews: ClientReview[] = []
  clients: Client[] = []
  posts: Post[] = []
  profiles: Profile[] = []
  services: Service[] = []
  recommendedPosts: Post[] = []
  companyInformation!: CompanyInformation
  galleries: Gallery[] = []

  constructor(
    private homeService: HomeService,
    public settingService: SettingService,
    public dialog: Dialog,
    private breakpointObserver: BreakpointObserver,
    private overlay: Overlay,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getHomeData()
  }

  openDialog(gallery: Gallery): void {
    const positionStrategy = this.overlay.position()
    .global()  // Use global positioning strategy
    .centerHorizontally()  // Center horizontally
    .top('48px');

    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '50%',
      positionStrategy: positionStrategy,
      data: gallery,
    });

    this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('85%', '85%');
      } else {
        dialogRef.updateSize('50%', '50%');
      }
    });
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
        this.galleries = response.data.recommended_galleries
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  detailLayanan(serviceName: string) {
    this.router.navigateByUrl(`/layanan/detail/${serviceName}`)
  }
}
