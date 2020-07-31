import {User} from "@services/auth/User";

export const SET_GOOGLE_OAUTH_RESULT = "SET_GOOGLE_OAUTH_RESULT";
export const GET_GOOGLE_OAUTH_RESULT = "GET_GOOGLE_OAUTH_RESULT";
export const LOGGED_IN = "LOGGED_IN";
export const LOGOUT = "LOGOUT";

export const setGoogleOauthResult = (googleOauthResult: any) => {
    return {
        type: SET_GOOGLE_OAUTH_RESULT,
        googleOauthResult
    }
};

export const getGoogleOauthResult = () => {
    return {
        type: GET_GOOGLE_OAUTH_RESULT
    }
};

export const loggedIn = (user: User) => {
    return {
        type: LOGGED_IN,
        user
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
    }
};
