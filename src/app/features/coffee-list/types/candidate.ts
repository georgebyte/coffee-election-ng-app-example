import {Vote} from './vote';
import {RequestState} from '../../../shared/types/request-state';

export interface Candidate {
    id: number;
    name: string;
    votes: Vote[];
    userAction?: string;
    updateRequest?: RequestState;
}
