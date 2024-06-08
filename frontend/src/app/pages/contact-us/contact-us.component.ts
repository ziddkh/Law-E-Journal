import { Component } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor(
    public settingService: SettingService
  ) {}
}
