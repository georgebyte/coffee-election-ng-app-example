import {Injectable} from '@angular/core';
import {Store} from 'rxjs-observable-store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {UserEndpoint} from './user.endpoint';
import {UserStoreState} from './user.store.state';
import {User} from '../types/user';

@Injectable()
export class UserStore extends Store<UserStoreState> {
    user$: Observable<User>;

    constructor(private endpoint: UserEndpoint) {
        super(new UserStoreState());

        this.user$ = this.state$.pipe(map(state => state.user));
    }

    get user(): User {
        return this.state.user;
    }

    loadUser(): Observable<User> {
        return this.endpoint.getUser(this).pipe(
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
