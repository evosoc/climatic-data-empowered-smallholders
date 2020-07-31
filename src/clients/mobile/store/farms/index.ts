import {reducer} from './Reducer'
import * as Actions from "./Actions";

const mapDispatchToProps = (dispatch) => {
    return {
        getFarmer: (id: string) => dispatch(Actions.getFarmer(id)),
        getFarmers: () => dispatch(Actions.getFarmers()),
        getCommunityPosts: () => dispatch(Actions.getCommunityPosts()),
        setFarmer: (id: string) => dispatch(Actions.setFarmer(id)),
        getWeatherData: (latLng: string) => dispatch(Actions.getWeatherData(latLng)),
    }
};

export {
    mapDispatchToProps,
    reducer
}
