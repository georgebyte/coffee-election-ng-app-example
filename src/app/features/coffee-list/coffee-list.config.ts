import {APP_CONFIG} from '../../app.config';

export const COFFEE_LIST_CONFIG = {
    requests: {
        listCandidates: {
            name: 'listCandidates',
            url: `${APP_CONFIG.apiBaseUrl}/candidates.json`,
        },
        postVote: {
            name: 'postVote',
            url: `${APP_CONFIG.apiBaseUrl}/vote`,
        },
    },
};
