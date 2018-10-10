import {NgModule, Optional, SkipSelf} from '@angular/core';
import {UserStore} from './user/services/user.store';
import {UserEndpoint} from './user/services/user.endpoint';

@NgModule({
    declarations: [],
    imports: [],
    providers: [UserStore, UserEndpoint],
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only.'
            );
        }
    }
}
