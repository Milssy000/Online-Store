import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { delayedRetry } from '../sets/delayedRetry.operator';
import { Injectable } from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                
                delayedRetry(500, 3),
              
                catchError(this.handleError)
            )
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMsg: string;
        if (errorResponse.error instanceof Error) {
            
            errorMsg = 'An error occurred:' + errorResponse.error.message;
        } else {
           
            errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
        }
        return throwError(errorMsg);
    }

} 
