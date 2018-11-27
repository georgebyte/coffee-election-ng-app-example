import {StoreRequestStateUpdater} from '../types/store-request-state-updater';

export function getUrlWithParams(
    url: string,
    params: {[key: string]: any}
): string {
    Object.keys(params).forEach(key => {
        const value = params[key];
        url = url.replace(`:${key}`, value);
    });
    return url;
}

export function getStoreRequestStateUpdater(
    store: any,
): StoreRequestStateUpdater {
    return (requestName, requestState) => {
        store.setState({
            ...store.state,
            requests: {
                ...store.state.requests,
                [requestName]: requestState,
            },
        });
    };
}
