import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError, delay} from 'rxjs/operators';

import {ApiResponse} from '../../../shared/types/api-response';
import {COFFEE_LIST_CONFIG} from '../coffee-list.config';
import {Candidate} from '../types/candidate';
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
import * as sortHelpers from '../../../shared/helpers/sort.helpers';
import {StoreRequestStateUpdater} from '../../../shared/types/store-request-state-updater';
import {CustomRequestStateUpdater} from '../../../shared/types/custom-request-state-updater';
import {Sort} from '../../../shared/types/sort';
import {SortOrder} from '../../../app.constants';

@Injectable()
export class CoffeeListEndpoint {
    constructor(private http: HttpClient) {}

    listCandidates(
        sort: Sort,
        requestStateUpdater: StoreRequestStateUpdater
    ): Observable<Candidate[]> {
        const request = COFFEE_LIST_CONFIG.requests.listCandidates;
        const options = {
            params: {
                ...sortHelpers.convertSortToRequestParams(sort),
            },
        };
        requestStateUpdater(request.name, {inProgress: true});
        return this.http
            .get<ApiResponse<Candidate[]>>(request.url, options)
            .pipe(
                delay(2000), // Simulate request delay
                map(response => {
                    requestStateUpdater(request.name, {inProgress: false});
                    // Simulate sorting on server
                    const candidates = response.data.sort(
                        (c1: Candidate, c2: Candidate): number => {
                            let field1 = c1[sort.field];
                            let field2 = c2[sort.field];
                            if (Array.isArray(field1)) {
                                field1 = field1.length;
                                field2 = field2.length;
                            }

                            if (field1 < field2) {
                                return sort.order === SortOrder.Asc ? -1 : 1;
                            }
                            if (field1 > field2) {
                                return sort.order === SortOrder.Asc ? 1 : -1;
                            }
                            return 0;
                        }
                    );
                    return candidates;
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

    addVote(
        candidate: Candidate,
        requestStateUpdater: CustomRequestStateUpdater
    ): Observable<null> {
        const url = endpointHelpers.getUrlWithParams(
            COFFEE_LIST_CONFIG.requests.addVote.url,
            {id: candidate.id}
        );
        requestStateUpdater({inProgress: true});
        return this.http.post<ApiResponse<null>>(url, null).pipe(
            map(response => {
                requestStateUpdater({inProgress: false});
                return response.data;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater({
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }

    removeVote(
        candidate: Candidate,
        requestStateUpdater: CustomRequestStateUpdater
    ): Observable<null> {
        const url = endpointHelpers.getUrlWithParams(
            COFFEE_LIST_CONFIG.requests.removeVote.url,
            {id: candidate.id}
        );
        requestStateUpdater({inProgress: true});
        return this.http.delete<ApiResponse<null>>(url).pipe(
            map(response => {
                requestStateUpdater({inProgress: false});
                return response.data;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater({
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }
}
