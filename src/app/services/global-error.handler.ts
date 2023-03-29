import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { ErrorService } from './error.service';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(
    private injector: Injector,
    private notificationService: NotificationService,
    private errorService: ErrorService
    ) {
    super();
  }

  handleError( error: Error | HttpErrorResponse ) {

  
    const router = this.injector.get(Router);

    if (!navigator.onLine) {
    
        this.notificationService.notifyError('No Internet Connection');
    } else {
      if (error instanceof HttpErrorResponse) {
      
        this.errorService.log(error).subscribe();
        this.notificationService.notifyError(`${error.status} - ${error.message}`);
      } else {
       
        this.errorService
        .log(error)
        .subscribe(errorWithContextInfo => {
          router.navigate(['/error'], { state: errorWithContextInfo });
        });
      }
    }

    
    super.handleError( error );
  }
}