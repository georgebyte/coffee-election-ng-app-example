import {Requests} from '../types/requests';
import {DetailsModal} from '../types/details-modal';
import {CandidateList} from '../types/candidate-list';
import {SortOrder} from '../../../app.constants';

export class CoffeeListStoreState {
    candidateList: CandidateList = {
        candidates: [],
        sort: {
            field: 'votes',
            order: SortOrder.Desc,
        },
    };
    detailsModal: DetailsModal = {};
    requests: Requests = {
        listCandidates: {},
    };
}
