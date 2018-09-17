import {NgModule, Optional, SkipSelf} from '@angular/core';

import {PageNotFoundView} from './page-not-found/page-not-found.view';

@NgModule({
    declarations: [PageNotFoundView],
    imports: [],
})
export class ViewsModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: ViewsModule
    ) {
        if (parentModule) {
            throw new Error(
                'ViewsModule is already loaded. Import it in the AppModule only.'
            );
        }
    }
}
