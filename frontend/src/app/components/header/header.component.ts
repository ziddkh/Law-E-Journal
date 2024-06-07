import { Component, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

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
    {
      name: "Postingan",
      url: "#",
      submenu: [{
        name: "Artikel",
        url: '/artikel',
        submenu: []
      }, {
        name: "Berita",
        url: '/berita',
        submenu: []
      }, {
        name: "Media",
        url: '/media',
        submenu: []
      }]
    },
    { name: "Tentang Kami", url: "/tentang-kami", submenu: [] },
    { name: "Kontak", url: "/kontak", submenu: [] },
  ]

  constructor(private renderer: Renderer2) { }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;

    if (this.isSidebarActive) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }
}
