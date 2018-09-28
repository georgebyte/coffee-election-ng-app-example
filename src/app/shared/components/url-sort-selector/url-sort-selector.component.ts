import {
    Component,
    Input,
    SimpleChanges,
    OnChanges,
    ChangeDetectionStrategy,
} from '@angular/core';

import {Sort} from '../../types/sort';
import {SortField} from './sort-field';
import {SortOrder} from '../../../app.constants';

@Component({
    selector: 'ce-url-sort-selector',
    templateUrl: './url-sort-selector.component.html',
    styleUrls: ['./url-sort-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UrlSortSelectorComponent implements OnChanges {
    @Input()
    sort: Sort;
    @Input('fields')
    originalFields: SortField[];

    fields: SortField[];

    ngOnChanges(changes: SimpleChanges) {
        this.fields = this.originalFields.map(field => {
            let order = '';
            if (this.sort.field === field.field && this.sort.order === SortOrder.Asc) {
                order = `-`;
            }
            return {
                ...field,
                queryParams: {
                    sort: `${order}${field.field}`,
                }
            }
        });
    }
}
