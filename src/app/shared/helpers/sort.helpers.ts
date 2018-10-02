import {Params} from '@angular/router';

import {Sort} from '../types/sort';
import {APP_CONFIG} from '../../app.config';
import {SortOrder} from '../../app.constants';

export function convertSortToRequestParams(sort: Sort): Params {
    return {
        [APP_CONFIG.sortRequestParam]:
            sort.order === SortOrder.Desc ? `-${sort.field}` : sort.field,
    };
}

export function convertQueryParamsToSort(
    params: Params,
    defaultSortField: string
): Sort {
    let field = params.sort || defaultSortField;
    let order = SortOrder.Asc;
    if (field.startsWith('-')) {
        order = SortOrder.Desc;
        field = field.substr(1);
    }
    return {
        field: field,
        order: order,
    };
}
