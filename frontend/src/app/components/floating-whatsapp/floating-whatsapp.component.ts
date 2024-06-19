import { Component, Input } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';

@Component({
  selector: 'app-floating-whatsapp',
  templateUrl: './floating-whatsapp.component.html',
  styleUrl: './floating-whatsapp.component.scss'
})
export class FloatingWhatsappComponent {
  @Input() phomeNumber: string | null = null
}
