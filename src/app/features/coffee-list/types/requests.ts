import {RequestState} from '../../../shared/types/request-state';

export interface Requests {
    listCandidates: RequestState;
    postVote: RequestState;
}
