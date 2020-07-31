import {Profile} from "../../src/models";
import {profileSvc} from "../Network";
import config from "@config";

export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export const LOADING_STARTED = "LOADING_STARTED";
export const LOADING_ENDED = "LOADING_ENDED";
export const API_FAILURE = "API_FAILURE";

export const SET_PROFILE = "SET_PROFILE";

export const getProfile = () => {
    return async (dispatch, getState) => {
        const network = profileSvc(getState());
        dispatch(loadingStarted());
        try {
            const res = await network.get(config.api.profileEndpoints.get);
            dispatch({
                type: GET_PROFILE_SUCCESS,
                profile: res.data
            })
        } catch (e) {
            console.log(e);
            dispatch({
                type: GET_PROFILE_FAILURE,
                error: e
            });
        } finally {
            dispatch(loadingEnded());
        }
    };
};

export const setProfile = (profile: Profile) => {
    return {
        type: SET_PROFILE,
        profile,
    }
};

export const loadingStarted = () => {
    return {
        type: LOADING_STARTED,
    }
};

export const loadingEnded = () => {
    return {
        type: LOADING_ENDED,
    }
};
