import React from 'react';
import {Appbar, Avatar} from "react-native-paper";
import {TouchableOpacity} from "react-native";
import {DrawerNavigationProp} from "@react-navigation/drawer";

export const Header = (props) => {
    const { scene, previous, navigation } = props;
    const { options } = scene.descriptor;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

    return (
        <Appbar.Header>
            { previous &&
            <Appbar.BackAction
                onPress={navigation.goBack}
            />}
            <Appbar.Content
                title={ title }
                titleStyle={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
            />
            <Appbar.Action
                icon="menu"
                onPress={() => navigation.openDrawer() }
            />
        </Appbar.Header>
    );

};
