import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import {ApiResponse} from '../../../shared/types/api-response';
import {USER_CONFIG} from '../user.config';
import {User} from '../types/user';
import {StoreRequestStateUpdater} from '../../../shared/types/store-request-state-updater';

@Injectable()
export class UserEndpoint {
    constructor(private http: HttpClient) {}

    getUser(requestStateUpdater: StoreRequestStateUpdater): Observable<User> {
        const request = USER_CONFIG.requests.getUser;
        requestStateUpdater(request.name, {
            inProgress: true,
        });
        return this.http.get<ApiResponse<User>>(request.url).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as User;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }
}
