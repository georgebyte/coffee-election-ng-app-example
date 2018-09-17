import {APP_CONFIG} from '../../app.config';

export const USER_CONFIG = {
    requests: {
        getUser: {
            name: 'getUser',
            url: `${APP_CONFIG.apiBaseUrl}/user.json`,
        },
    },
};
