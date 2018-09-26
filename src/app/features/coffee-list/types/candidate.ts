import {Vote} from './vote';
import {RequestState} from '../../../shared/types/request-state';
import {UserAction} from '../coffee-list.constants';

export interface Candidate {
    id: number;
    name: string;
    votes: Vote[];
    userAction?: UserAction;
    updateRequest?: RequestState;
}
