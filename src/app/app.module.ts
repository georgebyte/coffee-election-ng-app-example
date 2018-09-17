import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppInitializationModule} from './app-initialization.module';
import {CoreModule} from './core/core.module';
import {LayoutModule} from './layout/layout.module';
import {ViewsModule} from './views/views.module';
import {AppRoutingModule} from './app-routing.module';
import {CoffeeListModule} from './features/coffee-list/coffee-list.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        // Angular modules
        BrowserModule,
        HttpClientModule,

        // App initialization module
        AppInitializationModule,

        // Core "singleton" modules (not feature modules)
        CoreModule,
        LayoutModule,
        ViewsModule,

        // Feature modules
        CoffeeListModule,

        // App routing - should be the last import!
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
