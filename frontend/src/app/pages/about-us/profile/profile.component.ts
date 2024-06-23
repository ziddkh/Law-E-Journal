import { Component } from '@angular/core';
import { Profile } from '../../../models/profile';
import { ProfileService } from '../../../services/api/profile/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isLoading: boolean = false

  profile!: Profile
  activeId: number

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private saniziter: DomSanitizer,
    private router: Router,
  ) {
    this.activeId = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile() {
    this.isLoading = true
    this.profileService.getProfile(this.activeId)
      .then(response => {
        this.profile = response.data.profile
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoading = false
      })

  }

  getSafeContent(): SafeHtml {
    return this.saniziter.bypassSecurityTrustHtml(this.profile.description)
  }
}
