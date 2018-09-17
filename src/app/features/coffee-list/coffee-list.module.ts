import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoffeeListRoutingModule} from './coffee-list-routing.module';
import {CoffeeListView} from './views/coffee-list/coffee-list.view';
import {SharedModule} from '../../shared/shared.module';
import {CoffeeCandidateComponent} from './components/coffee-candidate/coffee-candidate.component';

@NgModule({
    declarations: [
        CoffeeListView,
        CoffeeCandidateComponent,
    ],
    imports: [CoffeeListRoutingModule, SharedModule, CommonModule],
})
export class CoffeeListModule {}
