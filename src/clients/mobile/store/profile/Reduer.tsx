import {
    API_FAILURE, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS,
    LOADING_ENDED,
    LOADING_STARTED, SET_PROFILE,
} from "./Actions";

const initialState = {
    profile: undefined,
    error: undefined,
    loading: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "persist/REHYDRATE":
            return {
                ...state,
                loading: false
            };
        case LOADING_STARTED:
            return {
                ...state,
                error: undefined,
                loading: true
            };
        case LOADING_ENDED:
            return {
                ...state,
                loading: false
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            };
        case GET_PROFILE_FAILURE:
        case API_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
