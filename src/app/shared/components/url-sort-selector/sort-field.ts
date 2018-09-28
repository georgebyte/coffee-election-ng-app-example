import {Params} from '@angular/router';

export interface SortField {
    name: string;
    field: string;
    queryParams?: Params,
}
