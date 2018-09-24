import {Vote} from './vote';

export interface Candidate {
    id: number;
    name: string;
    votes: Vote[];
    userAction?: string;
}
