import {FieldErrors} from './field-errors';

export interface RequestState {
    inProgress?: boolean;
    success?: boolean;
    error?: boolean;
    fieldErrors?: FieldErrors;
}
