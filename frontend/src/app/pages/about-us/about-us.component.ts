import { Component, OnInit } from '@angular/core';
import { CompanyInformationService } from '../../services/api/company-information/company-information.service';
import { CompanyInformation } from '../../models/company-information';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProfileService } from '../../services/api/profile/profile.service';
import { Profile } from '../../models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  isLoadingAbout: boolean = true
  isLoadingProfile: boolean = true
  companyInformation!: CompanyInformation
  founders: Profile[] = []
  advisors: Profile[] = []
  lawyers: Profile[] = []
  partners: Profile[] = []

  constructor(
    private companyInformationService: CompanyInformationService,
    private profileService: ProfileService,
    private saniziter: DomSanitizer,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAbout()
    this.getProfiles()
  }

  getAbout() {
    this.isLoadingAbout = true
    this.companyInformationService.getCompanyInformation()
      .then(response => {
        this.companyInformation = response.data.company_information
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoadingAbout = false
      })
  }

  getProfiles() {
    this.isLoadingProfile = true
    this.profileService.getProfiles()
      .then(response => {
        this.founders = response.data.founders
        this.advisors = response.data.advisors
        this.lawyers = response.data.lawyers
        this.partners = response.data.partners
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoadingProfile = false
      })
  }

  viewProfile(id: number) {
    this.router.navigateByUrl(`/tentang-kami/${id}/view`)
  }

  getSafeContent(): SafeHtml {
    return this.saniziter.bypassSecurityTrustHtml(this.companyInformation.description)
  }
}
