import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import {StoreEndpoint} from '../../../shared/types/store-endpoint';
import {ApiResponse} from '../../../shared/types/api-response';
import {UserStore} from './user.store';
import {USER_CONFIG} from '../user.config';
import {User} from '../types/user';

@Injectable()
export class UserEndpoint extends StoreEndpoint {
    constructor(private http: HttpClient) {
        super();
    }

    getUser(store: UserStore): Observable<User> {
        const request = USER_CONFIG.requests.getUser;
        this.setRequestState(store, request, {
            inProgress: true,
        });
        return this.http.get<ApiResponse<User>>(request.url).pipe(
            map(response => {
                this.setRequestState(store, request, {
                    inProgress: false,
                });
                return response.data as User;
            }),
            catchError((error: HttpErrorResponse) => {
                this.setRequestState(store, request, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }
}
