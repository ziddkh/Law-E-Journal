import { Component, OnInit } from '@angular/core';
import { CompanyInformationService } from '../../services/api/company-information/company-information.service';
import { CompanyInformation } from '../../models/company-information';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  isLoading: boolean = true
  companyInformation!: CompanyInformation

  constructor(
    private companyInformationService: CompanyInformationService,
    private saniziter: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.getAbout()
  }

  getAbout() {
    this.companyInformationService.getCompanyInformation()
      .then(response => {
        this.companyInformation = response.data.company_information
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  getSafeContent(): SafeHtml {
    return this.saniziter.bypassSecurityTrustHtml(this.companyInformation.description)
  }
}
