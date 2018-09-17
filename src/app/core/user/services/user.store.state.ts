import {Requests} from '../types/requests';
import {User} from '../types/user';

export class UserStoreState {
    user: User = null;
    requests: Requests = {
        getUser: {},
    };
}
