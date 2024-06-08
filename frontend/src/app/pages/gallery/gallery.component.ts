import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../../services/api/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  isLoading: boolean = true
  galleries: Gallery[] = []

  constructor(
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    this.getGalleries()
  }

  getGalleries() {
    this.isLoading = true
    this.galleryService.getGalleries()
      .then(response => {
        this.galleries = response.data.galleries.data
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
