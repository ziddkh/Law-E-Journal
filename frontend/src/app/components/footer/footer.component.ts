import { Component } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';

interface NavigationProps {
  name: string
  items: NavigationItemProps[]
}

interface NavigationItemProps {
  name: string
  url: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  navigations: NavigationProps[] = [
    {
      name: 'Navigasi',
      items: [
        {
          name: 'Beranda',
          url: '/',
        },
        {
          name: 'Tentang Kami',
          url: '/tentang-kami',
        },
        {
          name: 'Layanan',
          url: '/layanan',
        },
        {
          name: 'Galeri',
          url: '/galeri',
        },
        {
          name: 'Kontak',
          url: '/kontak-kami',
        },
      ]
    },
    {
      name: 'Postingan',
      items: [
        {
          name: 'Artikel',
          url: '/postingan/artikel'
        },
        {
          name: 'Berita',
          url: '/postingan/berita'
        },
        {
          name: 'Media',
          url: '/postingan/media'
        },
      ]
    },
  ]

  constructor(
    public settingService: SettingService
  ) {}
}
