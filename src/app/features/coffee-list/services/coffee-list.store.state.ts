import {Requests} from '../types/requests';
import {DetailsModal} from '../types/details-modal';
import {CandidateList} from '../types/candidate-list';
import {COFFEE_LIST_CONFIG} from '../coffee-list.config';

export class CoffeeListStoreState {
    candidateList: CandidateList = {
        candidates: [],
        sort: {
            field: COFFEE_LIST_CONFIG.defaultSortField,
            order: COFFEE_LIST_CONFIG.defaultSortOrder,
        },
    };
    detailsModal: DetailsModal = {};
    requests: Requests = {
        listCandidates: {},
    };
}
