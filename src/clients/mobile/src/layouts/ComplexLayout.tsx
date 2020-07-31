import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import styles from "../styles";
import LoadingOverlay from "../components/LoadingOverlay";
import {mapStateToProps} from "@store";

interface ComplexLayoutProps {
    loading: boolean;
    style: any;
}

class ComplexLayout extends Component<ComplexLayoutProps> {
    render() {
        return (
            <View style={{...styles.complexLayout, ...this.props.style}}>
                { this.props.children }
                { this.props.loading && <LoadingOverlay/> }
            </View>
        );
    }
    styles = StyleSheet.create({

    });
}

export default connect(mapStateToProps)(ComplexLayout);
