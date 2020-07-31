import * as Actions from "./Actions"

const initialState = {
    farmer: {},
    posts: [],
    week: [],
    today: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_FARMER:
        case Actions.GET_FARMER:
            return {
                ...state,
                farmer: action.farmer
            };
        case Actions.GET_FARMERS:
            return {
                ...state,
                farmers: action.farmers
            };
        case Actions.GET_COMMUNITY_POSTS:
            return {
                ...state,
                posts: action.posts,
            };
        case Actions.SET_WEATHER_DATA:
            return {
                ...state,
                week: action.week,
                today: action.today
            };

        default:
            return state;
    }
};
