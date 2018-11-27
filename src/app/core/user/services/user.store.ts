import {Injectable} from '@angular/core';
import {Store} from 'rxjs-observable-store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {UserEndpoint} from './user.endpoint';
import {UserStoreState} from './user.store.state';
import {User} from '../types/user';
import {StoreRequestStateUpdater} from '../../../shared/types/store-request-state-updater';
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';

@Injectable()
export class UserStore extends Store<UserStoreState> {
    user$: Observable<User>;
    private storeRequestStateUpdater: StoreRequestStateUpdater;

    constructor(private endpoint: UserEndpoint) {
        super(new UserStoreState());

        this.user$ = this.state$.pipe(map(state => state.user));
        this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
            this
        );
    }

    get user(): User {
        return this.state.user;
    }

    loadUser(): Observable<User> {
        return this.endpoint.getUser(this.storeRequestStateUpdater).pipe(
            tap((user: User) => {
                this.handleGetUserResponse(user);
            })
        );
    }

    private handleGetUserResponse(user: User): void {
        this.setState({
            ...this.state,
            user: user,
        });
    }
}
