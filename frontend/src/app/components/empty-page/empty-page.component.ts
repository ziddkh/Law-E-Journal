import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.scss'
})
export class EmptyPageComponent {
  @Input() module: string = '[Nama Module]'
}
