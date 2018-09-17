import {
    Component,
    HostBinding,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import {Subject} from 'rxjs';

import {CoffeeListStore} from '../../services/coffee-list.store';
import {CoffeeListEndpoint} from '../../services/coffee-list.endpoint';
import {ModalComponent} from '../../../../shared/components/modal/modal.component';
import {USER_ACTION} from '../../coffee-list.constants';

@Component({
    templateUrl: './coffee-list.view.html',
    styleUrls: ['./coffee-list.view.scss'],
    providers: [CoffeeListStore, CoffeeListEndpoint],
})
export class CoffeeListView implements OnInit, AfterViewInit, OnDestroy {
    @HostBinding('class')
    cssClass = 'ce-view ce-coffee-list-view';

    @ViewChild('detailsModal')
    detailsModal: ModalComponent;

    USER_ACTION = USER_ACTION;

    private ngUnsubscribe$: Subject<undefined> = new Subject();

    constructor(public store: CoffeeListStore) {}

    ngOnInit(): void {
        this.store.init();
    }

    ngAfterViewInit(): void {
        this.store.setDetailsModal(this.detailsModal);
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
