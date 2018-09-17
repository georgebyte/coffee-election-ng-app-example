import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './components/modal/modal.component';

const EXPORTED_DECLARATIONS = [
    ModalComponent,
];

@NgModule({
    declarations: [...EXPORTED_DECLARATIONS],
    imports: [CommonModule],
    exports: [...EXPORTED_DECLARATIONS],
})
export class SharedModule {}
