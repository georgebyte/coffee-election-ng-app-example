import {RequestState} from './request-state';

export type StoreRequestStateUpdater = (
    requestName: string,
    requestState: RequestState
) => void;
