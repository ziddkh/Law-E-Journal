import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { SettingService as SettingApi } from './services/api/setting/setting.service';
import { SettingService } from './services/setting/setting.service';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoaderService } from './services/loader/loader.service';
import { Observable, filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'law-e-journal-frontend-new';
  private maxLoadTime = 10000

  constructor(
    private settingApi: SettingApi,
    public settingService: SettingService,
    private router: Router,
    private renderer: Renderer2,
    private loaderService: LoaderService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.getSettings();

    (this.router.events as Observable<RouterEvent>).pipe(
      filter((event: RouterEvent) => event instanceof NavigationStart || event instanceof NavigationEnd),
      tap((event: RouterEvent) => {
        if (event instanceof NavigationStart) {
          this.renderer.setStyle(document.body, 'overflow', 'hidden');
          this.loaderService.show(this.maxLoadTime);
        }
        if (event instanceof NavigationEnd) {
          this.checkIfContentLoaded();
        }
      })
    ).subscribe();
  }

  getSettings() {
    this.settingApi.getSettings()
      .then(response => {
        this.settingService.setSettings(response.data.settings)
      })
      .catch(error => {
        console.log(error)
      })
  }

  checkIfContentLoaded() {
    const elements = [
      ...Array.from(document.images),
      ...Array.from(document.querySelectorAll('iframe')),
      ...Array.from(document.scripts),
      ...Array.from(document.styleSheets)
    ];

    let loadedElements = 0;
    const totalElements = elements.length;

    if (totalElements === 0) {
      this.loaderService.hide();
      this.renderer.removeStyle(document.body, 'overflow');
      return;
    }

    elements.forEach(element => {
      if (element instanceof HTMLImageElement) {
        if (element.complete) {
          loadedElements++;
          if (loadedElements === totalElements) {
            this.loaderService.hide();
            this.renderer.removeStyle(document.body, 'overflow');
          }
        } else {
          this.ngZone.runOutsideAngular(() => {
            this.renderer.listen(element, 'load', () => {
              this.ngZone.run(() => {
                loadedElements++;
                if (loadedElements === totalElements) {
                  this.loaderService.hide();
                  this.renderer.removeStyle(document.body, 'overflow');
                }
              });
            });
          });
        }
      } else if (element instanceof HTMLIFrameElement) {
        if (element.contentWindow && element.contentWindow.document.readyState === 'complete') {
          loadedElements++;
          if (loadedElements === totalElements) {
            this.loaderService.hide();
            this.renderer.removeStyle(document.body, 'overflow');
          }
        } else {
          this.ngZone.runOutsideAngular(() => {
            this.renderer.listen(element, 'load', () => {
              this.ngZone.run(() => {
                loadedElements++;
                if (loadedElements === totalElements) {
                  this.loaderService.hide();
                  this.renderer.removeStyle(document.body, 'overflow');
                }
              });
            });
          });
        }
      }
      else if (element instanceof HTMLScriptElement || element instanceof CSSStyleSheet) {
        // Assuming scripts and stylesheets are loaded if they are already in the document
        loadedElements++;
        if (loadedElements === totalElements) {
          this.loaderService.hide();
          this.renderer.removeStyle(document.body, 'overflow');
        }
      }
    });

  }
}
