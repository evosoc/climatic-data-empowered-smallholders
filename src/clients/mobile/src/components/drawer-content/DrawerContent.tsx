import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import {useTheme,} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {connect} from 'react-redux';

import {LoggedOutDrawerContent} from "./LoggedOutDrawerContent";
import LoggedInDrawerContent from "./LoggedInDrawerContent";
import styles from "../../styles";
import {mapStateToProps} from "@store";

function DrawerContent(props: any, state: any) {
    const paperTheme = useTheme();
    const {navigation} = props;

    let content = <LoggedOutDrawerContent navigation={navigation} />;
    // TODO: FIX
    //if (props.isLoggedIn) {
        content = <LoggedInDrawerContent navigation={navigation} />
    //}

    return (
        <DrawerContentScrollView style={{
            backgroundColor: paperTheme.colors.background,
        }}  >
            <Animated.View
                style={[
                    styles.drawerContent,
                    {
                        //...styles.drawerContent,
                        backgroundColor: paperTheme.colors.surface,
                        // transform: [{ translateX }],
                    },
                ]}
            >
                { content }
            </Animated.View>
        </DrawerContentScrollView>
    );
}

export default connect(mapStateToProps)(DrawerContent);
