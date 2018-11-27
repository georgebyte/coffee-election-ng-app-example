import {RequestState} from './request-state';

export type CustomRequestStateUpdater = (requestState: RequestState) => void;
