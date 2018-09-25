import {RequestState} from './request-state';

export interface RequestStateUpdater {
    (requestState: RequestState): void;
}
