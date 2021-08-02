import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  constructor(private matSnackBar: MatSnackBar, private router: Router, private zone: NgZone) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.hideToastMessage();
      }
    });
  }

  showToastMessage(message: string, duration?: number): void {
    this.zone.run(() => {
      this.matSnackBar.open(message, undefined, { duration: duration || 3000 });
    });
  }

  hideToastMessage(): void {
    this.matSnackBar.dismiss();
  }
}
