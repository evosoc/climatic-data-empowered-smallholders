import { reducer } from "./Reducer";
import * as Actions from './Actions';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(Actions.logout()),
        loggedIn: (user) => dispatch(Actions.loggedIn(user)),
        setGoogleOauthResult: (result) => dispatch(Actions.setGoogleOauthResult(result)),
        getGoogleOauthResult: () => dispatch(Actions.getGoogleOauthResult()),
    }
};

export {
    Actions,
    reducer,
    mapDispatchToProps
}
