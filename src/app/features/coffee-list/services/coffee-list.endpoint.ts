import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError, delay} from 'rxjs/operators';

import {StoreEndpoint} from '../../../shared/types/store-endpoint';
import {ApiResponse} from '../../../shared/types/api-response';
import {CoffeeListStore} from './coffee-list.store';
import {COFFEE_LIST_CONFIG} from '../coffee-list.config';
import {Candidate} from '../types/candidate';

@Injectable()
export class CoffeeListEndpoint extends StoreEndpoint {
    constructor(private http: HttpClient) {
        super();
    }

    listCandidates(
        store: CoffeeListStore,
    ): Observable<Candidate[]> {
        const request = COFFEE_LIST_CONFIG.requests.listCandidates;
        this.setRequestState(store, request, {
            inProgress: true,
        });
        return this.http.get<ApiResponse<Candidate[]>>(request.url).pipe(
            delay(2000),
            map(response => {
                this.setRequestState(store, request, {
                    inProgress: false,
                });
                return response.data;
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
