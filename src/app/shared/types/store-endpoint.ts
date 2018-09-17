import {RequestState} from './request-state';

export class StoreEndpoint {
    setRequestState(
        store: any,
        requestConfig: {
            name: string;
            url: string;
        },
        requestState: RequestState
    ): void {
        store.setState({
            ...store.state,
            requests: {
                ...store.state.requests,
                [requestConfig.name]: requestState,
            },
        });
    }
}
