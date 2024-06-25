import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../../services/api/gallery/gallery.service';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Dialog } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { ImageDialogComponent } from '../../components/image-dialog/image-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  isLoading: boolean = true
  galleries: Gallery[] = []

  constructor(
    private galleryService: GalleryService,
    public dialog: Dialog,
    private breakpointObserver: BreakpointObserver,
    private overlay: Overlay,
  ) {}

  ngOnInit(): void {
    this.getGalleries()
  }

  showImage(gallery: Gallery): void {
    const positionStrategy = this.overlay.position()
    .global()  // Use global positioning strategy
    .centerHorizontally()  // Center horizontally
    .top('48px');

    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '50%',
      positionStrategy: positionStrategy,
      data: gallery,
    });

    this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('85%', '85%');
      } else {
        dialogRef.updateSize('50%', '50%');
      }
    });
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
