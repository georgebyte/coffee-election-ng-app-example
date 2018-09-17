import {NgModule, APP_INITIALIZER} from '@angular/core';

import {UserStore} from './core/user/services/user.store';

export function loadUser(userStore: UserStore) {
    return () => userStore.loadUser().toPromise();
}

@NgModule({
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: loadUser,
            deps: [UserStore],
            multi: true,
        },
    ],
})
export class AppInitializationModule {}
