import {Params} from '@angular/router';

import {SortOrder} from '../../../app.constants';

export interface SortField {
    name: string;
    field: string;
    order?: SortOrder;
    queryParams?: Params;
}
