import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ModalComponent} from './components/modal/modal.component';
import {UrlSortSelectorComponent} from './components/url-sort-selector/url-sort-selector.component';

const EXPORTED_DECLARATIONS = [ModalComponent, UrlSortSelectorComponent];

@NgModule({
    declarations: [...EXPORTED_DECLARATIONS],
    imports: [CommonModule, RouterModule],
    exports: [...EXPORTED_DECLARATIONS],
})
export class SharedModule {}
