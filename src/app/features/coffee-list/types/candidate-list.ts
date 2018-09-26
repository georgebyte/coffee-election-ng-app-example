
import {Candidate} from './candidate';
import {Sort} from '../../../shared/types/sort';

export interface CandidateList {
    candidates: Candidate[];
    sort: Sort;
}
