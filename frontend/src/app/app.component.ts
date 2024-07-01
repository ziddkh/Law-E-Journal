import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { SettingService as SettingApi } from './services/api/setting/setting.service';
import { SettingService } from './services/setting/setting.service';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoaderService } from './services/loader/loader.service';
import { Observable, filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'law-e-journal-frontend-new';

  constructor(
    private settingApi: SettingApi,
    public settingService: SettingService,
    private router: Router,
    private renderer: Renderer2,
    private loaderService: LoaderService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings() {
    this.settingApi.getSettings()
      .then(response => {
        this.settingService.setSettings(response.data.settings)
      })
      .catch(error => {
        console.log(error)
      })
  }


}
