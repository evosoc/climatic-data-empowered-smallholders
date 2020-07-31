import {store, persistor} from './store';
import * as Auth from "./auth";
import * as Profile from './profile'
import * as Farms from './farms';
const mapDispatchToProps = (dispatch) => {
    return {
        ...Auth.mapDispatchToProps(dispatch),
        ...Farms.mapDispatchToProps(dispatch),
        ...Profile.mapDispatchToProps(dispatch),
        loadingStarted: () => dispatch({
            type: "LOADING_STARTED"
        }),
        loadingEnded: () => dispatch({
            type: "LOADING_ENDED"
        })
    };
};

const mapStateToProps = (state, props) => {
    const loading = state.ProfileReducer.loading === true ||
        state.AuthReducer.loading === true ||
        state.FarmReducer.loading === true;

    return {
        ...props,
        ...state.FarmReducer,
        accessToken: state.AuthReducer.accessToken,
        isLoggedIn: state.AuthReducer.isLoggedIn,
        user: state.AuthReducer.user,
        profile: state.ProfileReducer.profile,
        loading: loading,
    }
};

export {
    store,
    persistor,
    mapStateToProps,
    mapDispatchToProps
};
