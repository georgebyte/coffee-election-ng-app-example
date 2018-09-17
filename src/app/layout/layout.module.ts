import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [RouterModule],
    providers: [],
})
export class LayoutModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: LayoutModule
    ) {
        if (parentModule) {
            throw new Error(
                'LayoutModule is already loaded. Import it in the AppModule only.'
            );
        }
    }
}
