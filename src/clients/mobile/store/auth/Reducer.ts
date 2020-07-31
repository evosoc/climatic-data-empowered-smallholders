import * as Actions from "./Actions";

const initialState = {
    accessToken: "",
    googleOauthResult: null,
    isLoggedIn: false,
    registrationSuccess: false,
    user: {
        email: "todo@todo.com"
    }
};

function _getGoogleOauthResult(state: any, action: any) {
    return {
        ...state,
        googleOauthResult: state.googleOauthResult
    }
}

function _setGoogleOauthResult(state: any, action: any) {
    return {
        ...state,
        googleOauthResult: action.googleOauthResult,
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_GOOGLE_OAUTH_RESULT:
            return _getGoogleOauthResult(state, action);
        case Actions.SET_GOOGLE_OAUTH_RESULT:
            return _setGoogleOauthResult(state, action);
        case Actions.LOGGED_IN:
            return {...state, isLoggedIn: true, user: action.user };
        case Actions.LOGOUT:
            return {...state, isLoggedIn: false, user: null };
        default:

            return {
                ...state,
                user: { email: "todo@todo.com"}
            };
    }
};
