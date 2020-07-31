import {reducer} from './Reduer';
import * as Actions from "./Actions";
import {Profile} from "@models";

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: () => dispatch(Actions.getProfile()),
        setProfile: (profile: Profile) => dispatch(Actions.setProfile(profile))
    }
};

export {
    reducer,
    mapDispatchToProps,
}
