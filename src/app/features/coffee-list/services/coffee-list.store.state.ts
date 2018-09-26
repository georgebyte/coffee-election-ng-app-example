import {Requests} from '../types/requests';
import {DetailsModal} from '../types/details-modal';
import {Candidate} from '../types/candidate';

export class CoffeeListStoreState {
    candidates: Candidate[] = [];
    detailsModal: DetailsModal = {};
    requests: Requests = {
        listCandidates: {},
    };
}
