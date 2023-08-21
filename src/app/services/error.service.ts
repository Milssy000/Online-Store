import { Injectable} from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable()
export class ErrorService {
  [x: string]: any;

  constructor(
    private locationStrategy: LocationStrategy
  ) {
    //comment
  }

  log(error) {
    // Send error to server
    const errorToSend = this.addContextInfo(error);
    return fakeHttpService.post(errorToSend);
  }

  private addContextInfo(error) {
   
    const name = error.name || null;
    const appId = 'A';
    const user = 'Tressy';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const url = this.locationStrategy.path();
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : this.getStack(error);
    const errorWithContext = {name, appId, user, time, id, url, status, message, stack};
    return errorWithContext;
  }
  


}


class fakeHttpService {
  static post(error: { name: any; appId: string; user: string; time: number; id: string; url: string; status: any; message: any; stack: any; }): Observable<any> {
    console.log('Error sent to the server: ', error);
    return of(error);
  }
}

