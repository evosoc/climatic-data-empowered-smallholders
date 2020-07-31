import axios from "axios";
import config from "@config";
import {store} from "@store";

const responseHandler = (error) => {
    if (error.response.status === 401) {
        store.dispatch({
            type: "LOGOUT",
        });

    }
    return Promise.reject(error.response.data);
};

const getToken = (state) => {
    let token = undefined;
    if (state && state.AuthReducer && state.AuthReducer.user) {
        token = state.AuthReducer.user.token;
    }

    return token;
};

const requestHandler = (request) => {
    let token = undefined;
    try {
        token = getToken(store.getState());

        if (token) {
            request.headers['Authorization'] = `Bearer ${token}`;
        }
    } catch (e) {
        console.error(e);
    }

    return request;
};

const client = axios.create({
    baseURL: config.api.host,
    timeout: config.api.timeout,
});

client.interceptors.request.use(requestHandler);
//client.interceptors.response.use((config) => config, responseHandler);

export default client;
