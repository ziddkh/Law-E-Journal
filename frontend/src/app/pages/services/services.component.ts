import { Component } from '@angular/core';
import { ServicePageService } from '../../services/api/service/service-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  isLoading: boolean = false;
  services: any;
  constructor(
    private router: Router,
    private servicePageService: ServicePageService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getServices();
  }

  getServices() {
    this.isLoading = true
    this.servicePageService.getServices().then((result) => {
      this.isLoading = false;
      this.services = result.data;
    })
  }
}
