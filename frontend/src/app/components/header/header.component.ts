import { Component, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SettingService } from '../../services/setting/setting.service';

interface NavigationProps {
  name: string
  url: string
  submenu: NavigationProps[]
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('toggleAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  isSidebarActive: boolean = false;

  navigations: NavigationProps[] = [
    { name: "Beranda", url: "/", submenu: [] },
    { name: "Tentang Kami", url: "/tentang-kami", submenu: [] },
    { name: "Layanan", url: "/layanan", submenu: [] },
    {
      name: "Postingan",
      url: "/postingan",
      submenu: []
    },
    { name: "Galeri", url: "/galeri", submenu: [] },
    { name: "Kontak", url: "/kontak-kami", submenu: [] },
  ]

  constructor(
    private renderer: Renderer2,
    public settingService: SettingService
  ) {
    this.isSidebarActive = false
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;

    if (this.isSidebarActive) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }
}
