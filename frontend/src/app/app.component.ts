import { Component, OnInit } from '@angular/core';
import { SettingService as SettingApi } from './services/api/setting/setting.service';
import { SettingService } from './services/setting/setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'law-e-journal-frontend-new';

  constructor(
    private settingApi: SettingApi,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.getSettings()
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
