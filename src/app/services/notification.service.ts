import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { publish, refCount } from "rxjs/operators";
import { AppNotification } from '../sets/appnotification.interface';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable()
export class NotificationService {

  private _notification: BehaviorSubject<AppNotification> = new BehaviorSubject(null);
  readonly notification$: Observable<AppNotification> = this._notification.asObservable().pipe(publish(),refCount());
  

  constructor(
      private locationStrategy: LocationStrategy
  ) {
    //comment
  }

  notifyMessage(message: string): void {
    let notificationContent:AppNotification = {
        isError: false,
        message: message,
        location: ''
    }
    this.notify(notificationContent);
  }

  notifyError(message: string): void {
    let notificationContent:AppNotification = {
        isError: true,
        message: message,
        location: this.getLocation()
    }
    this.notify(notificationContent);
  }

  private notify(notificationContent:AppNotification): void {
    this._notification.next(notificationContent);
    setTimeout(() => this._notification.next(null), 3000);
  }

  private getLocation(): string {
    return this.locationStrategy instanceof PathLocationStrategy ? this.locationStrategy.path() : '';
  }

}
