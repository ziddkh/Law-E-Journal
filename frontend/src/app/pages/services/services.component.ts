import { Component } from '@angular/core';
import { ServicePageService } from '../../services/api/service/service-page.service';
import { Router } from '@angular/router';
import { ClientReviewService } from '../../services/api/client-review/client-review.service';
import { ClientReview } from '../../models/client-review';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  isLoading: boolean = false;
  services: any;
  serviceHeader: any;
  clientReviews: ClientReview[] = []
  constructor(
    private router: Router,
    private servicePageService: ServicePageService,
    private clientReviewService: ClientReviewService,
    private saniziter: DomSanitizer,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getServices();
    this.getClientReviews()
  }

  getServices() {
    this.isLoading = true
    this.servicePageService.getServices().then((result) => {
      this.isLoading = false;
      this.services = result.data.services;
      this.serviceHeader = result.data.service_header;
    })
  }

  getClientReviews() {
    this.isLoading = true
    this.clientReviewService.getClientReviews()
      .then(response => {
        this.clientReviews = response.data.client_reviews
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  getSafeContent(): SafeHtml {
    return this.saniziter.bypassSecurityTrustHtml(this.serviceHeader.description)
  }
}
