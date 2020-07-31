import axios, {AxiosInstance} from 'axios';
import config from "@config";

const requestHandler = (state) => {
    return (request) => {
        let token = undefined;
        try {
            token = getToken(state);
            if (token) {
                request.headers['Authorization'] = `Bearer ${token}`;
            }
        } catch (e) {
            console.error(e);
        }

        return request;
    }
};

const getToken = (state) => {
    let token = undefined;
    if (state && state.AuthReducer && state.AuthReducer.user) {
        token = state.AuthReducer.user.token;
    }
    return token;
};

export const profileSvc = (state: any): AxiosInstance => {
    const client = axios.create({
        baseURL: config.api.host,
        timeout: config.api.timeout,
    });

    client.interceptors.request.use(requestHandler(state));
    return client;
};
