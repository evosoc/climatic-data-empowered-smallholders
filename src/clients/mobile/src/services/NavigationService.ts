import { NavigationActions } from "react-navigation";

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
};

const navigate = (routeName: string, params?: any) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            // @ts-ignore
            type: NavigationActions.NAVIGATE,
            routeName,
            params,
        })
    )
};

export {
    navigate,
    setTopLevelNavigator
}
