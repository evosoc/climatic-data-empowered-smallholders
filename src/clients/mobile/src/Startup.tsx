import React from 'react';
import {connect} from 'react-redux';;
import {mapDispatchToProps, mapStateToProps} from "@store";

class Startup extends React.Component<any, any> {
    componentDidMount(): void {
        if (this.props.isLoggedIn) {
            this.props.getProfile();
        }
    }

    render() {
        return (
            this.props.children
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Startup);
