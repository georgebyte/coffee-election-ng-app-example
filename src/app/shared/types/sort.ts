import {SortOrder} from '../../app.constants';

export interface Sort {
    field: string;
    order?: SortOrder;
}
