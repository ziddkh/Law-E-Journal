import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-component',
  templateUrl: './empty-component.component.html',
  styleUrl: './empty-component.component.scss'
})
export class EmptyComponentComponent {
  @Input() module: string = '[Nama Module]'
}
