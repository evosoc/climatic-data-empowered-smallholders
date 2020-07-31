import React from 'react';
import RootNavigator from './routes';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import Startup from "./Startup";

class App extends React.Component<any> {
    render() {
        return (
            <Startup>
                <RootNavigator/>
            </Startup>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
