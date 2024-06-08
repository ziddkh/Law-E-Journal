import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePageService } from '../../../services/api/service/service-page.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  isLoading: boolean = false;
  slug: string;
  serviceDetail: any;
  constructor(
    private router: Router,
    private servicePageService: ServicePageService,
    private route: ActivatedRoute,
    private saniziter: DomSanitizer,
  ) {
    this.slug = this.route.snapshot.params['name']
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDetail()
  }

  getDetail() {
    this.servicePageService.getService(this.slug).then((result) => {
      this.isLoading = false;
      this.serviceDetail = result.data;
    })
  }

  getSafeContent(): SafeHtml {
    return this.saniziter.bypassSecurityTrustHtml(this.serviceDetail.description)
  }
}
