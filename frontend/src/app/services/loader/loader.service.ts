import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(true)
  loading$ = this.loadingSubject.asObservable()

  private timeoutHandle: any

  constructor() { }

  show(maxLoadTime?: number) {
    this.loadingSubject.next(true)

    if (maxLoadTime) {
      this.timeoutHandle = setTimeout(() => {
        this.hide()
      }, maxLoadTime)
    }
  }

  hide() {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle)
    }
    this.loadingSubject.next(false)
  }
}
