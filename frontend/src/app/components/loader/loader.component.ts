import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = true

  constructor(
    private loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.loaderService.loading$.subscribe(isLoading => {
      this.isLoading = isLoading
    })
  }
}
