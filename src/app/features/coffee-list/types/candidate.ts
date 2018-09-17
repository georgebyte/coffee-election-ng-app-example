import {Vote} from './vote';

export interface Candidate {
    name: string;
    votes: Vote[];
    userAction?: string;
}
