import {ActivityIndicator} from "react-native-paper";
import {View} from "react-native";
import React from "react";

const LoadingOverlay = () => {
    return (<View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#999',
        opacity: 0.9
    }}>
        <ActivityIndicator size="large"  />
    </View>);
};

export default LoadingOverlay;
