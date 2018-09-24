import {APP_CONFIG} from '../../app.config';

export const COFFEE_LIST_CONFIG = {
    requests: {
        listCandidates: {
            name: 'listCandidates',
            url: `${APP_CONFIG.apiBaseUrl}/candidates.json`,
        },
        addVote: {
            name: 'addVote',
            url: `${APP_CONFIG.apiBaseUrl}/candidates/:id/vote`,
        },
        removeVote: {
            name: 'removeVote',
            url: `${APP_CONFIG.apiBaseUrl}/candidates/:id/vote`,
        },
    },
};
