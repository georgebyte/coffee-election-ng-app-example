import {
    Component,
    HostBinding,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

import {CoffeeListStore} from '../../services/coffee-list.store';
import {CoffeeListEndpoint} from '../../services/coffee-list.endpoint';
import {ModalComponent} from '../../../../shared/components/modal/modal.component';
import {COFFEE_LIST_CONFIG} from '../../coffee-list.config';
import * as sortHelpers from '../../../../shared/helpers/sort.helpers';

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

    private ngUnsubscribe$: Subject<undefined> = new Subject();

    constructor(public store: CoffeeListStore, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.store.init();
        this.subscribeToQueryParamsUpdates();
    }

    ngAfterViewInit(): void {
        this.store.setDetailsModal(this.detailsModal);
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    private subscribeToQueryParamsUpdates(): void {
        this.route.queryParams
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(params => {
                this.store.sortCandidates(
                    sortHelpers.convertQueryParamsToSort(
                        params,
                        COFFEE_LIST_CONFIG.defaultSortField
                    )
                );
            });
    }
}
