import axios from 'axios';
import RegisterUserRequest from "./RegisterUserRequest";
import * as Google from 'expo-google-app-auth';
import BasicLoginRequest from "./BasicLoginRequest";
import {User} from "./User";
import config from "@config"

const network = axios.create({
    baseURL: config.auth.host,
    timeout: config.auth.timeout
});

export const registerUser = async (req: RegisterUserRequest) => {
    try {
        const res = await network.post(config.auth.registerURI, req);
        return res.data;
    } catch (e) {
        throw e;
    }
};

export const basicLogin = async (req: BasicLoginRequest) => {
    try {
        const res = await network.post(config.auth.basicLoginURI, req);
        return userFromLoginResponse(res);
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const userFromLoginResponse = (res): User => {
    if (!res || !res.data) {
        return undefined;
    }
    return new User({
        email: res.data.payload.email,
        emailVerified: res.data.payload.emailVerified,
        familyName: res.data.payload.familyName,
        givenName: res.data.payload.givenName,
        token: res.data.JWT,
    });
};

export const googleLogin = async () => {
    try {
        const {
            androidClientId,
            androidStandaloneAppClientId,
            iosStandaloneAppClientId,
            iosClientId,
            scopes} = config.auth.google;

        const result = await Google.logInAsync({
            androidClientId,
            androidStandaloneAppClientId,
            iosClientId,
            iosStandaloneAppClientId,
            scopes
        });

        if (result.type !== 'success') {
            alert(result.type);
            return;
        }
        const payload = {
            accessToken: result.accessToken
        };

        const appLoginResult = await network.post(config.auth.google.c19TokenEndpoint, payload);
        const user = userFromLoginResponse(appLoginResult);

        return {
            user,
            googleLoginResult: result
        }

    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const checkLoggedIn = async (token: string) => {
    try {
        const resp = await network.post(config.auth.verifyJWTEndpoint, {}, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        return true;
    } catch (e) {
        if (e && e.response && e.response.data) {
            throw e.response.data;
        }
        throw e;
    }
};
