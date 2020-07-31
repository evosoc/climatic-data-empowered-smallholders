import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DarkTheme, DefaultTheme, useTheme} from "react-native-paper";
import StackNavigator from "./StackNavigator";
import {DrawerContent} from "@components";
import * as NavigationService from "../services/NavigationService"

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
    const theme = useTheme();
    const navigationTheme: any = theme.dark ? DarkTheme : DefaultTheme;
    const drawerContent = (props) => <DrawerContent {...props} />;

    return (
        <NavigationContainer theme={navigationTheme}
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
        >
            <Drawer.Navigator drawerContent={ drawerContent }>
                <Drawer.Screen name="Home" component={StackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};
