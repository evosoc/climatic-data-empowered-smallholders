import {loadingEnded, loadingStarted} from "../profile/Actions";

const users = require("./data.json");
const posts = require("./community-posts.json");
import axios from 'axios';

export const SET_FARMER = "SET_FARMER";
export const GET_FARMER = "GET_FARMER";
export const GET_FARMERS = "GET_FARMERS";
export const SET_WEATHER_DATA = "SET_WEATHER_DATA";
export const GET_COMMUNITY_POSTS = "GET_COMMUNITY_POSTS";
export const ERROR = "ERROR";

export const getFarmer = (id: string) => {
    const user = users.filter((x) => x.id === id);
    return {
        type: GET_FARMER,
        farmer: user
    }
};

export const getFarmers = () => {
    return {
        type: GET_FARMERS,
        farmers: users
    }
};

export const getCommunityPosts = () => {
    return {
        type: GET_COMMUNITY_POSTS,
        posts
    }
};

export const setFarmer = (id: string) => {
    const farmers = users.filter((x) => x.id === id);
    const farmer = farmers && farmers.length > 0 ? farmers[0] : {};
    return async (dispatch) => {
        dispatch({
            type: SET_FARMER,
            farmer: farmer
        });
        if (farmer.location) {
            dispatch(getWeatherData(farmer.location));
        }
    };
};

export const error = (err) =>{
    return {
        type: ERROR,
        error: err
    }
};

export const getWeatherData = (latLng: string) => {
    return async (dispatch) => {
        try {
            dispatch(loadingStarted());
            const url = `https://eu-gb.functions.appdomain.cloud/api/v1/web/david%40evosoc.co.uk_dev/get-weather-resource/location?geocode=${latLng}&language=en-EN`;
            const result = await axios.get(url);
            dispatch({
                type: SET_WEATHER_DATA,
                week: result.data.weekData,
                today: result.data.today
            })
        } catch (e) {
            dispatch(error(e));
        } finally {
            dispatch(loadingEnded())
        }
    }
};
