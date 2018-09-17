import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoffeeListView} from './views/coffee-list/coffee-list.view';

export const routingPaths = {
    coffeeList: 'list',
};

const routes: Routes = [
    {
        path: routingPaths.coffeeList,
        component: CoffeeListView,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoffeeListRoutingModule {}
