import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {
    Drawer,
} from 'react-native-paper';
import styles from "../../styles";

export function LoggedOutDrawerContent(props: any) {
    const {navigation} = props;

    return (
        <Drawer.Section>
            <DrawerItem
                style={styles.drawerItem}
                icon={({ color, size }) => (
                    <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={size}
                    />
                )}
                label="Home"
                onPress={() => { navigation.navigate("HomeScreen" )}}
            />
            <DrawerItem
                style={styles.drawerItem}
                icon={({ color, size }) => (
                    <MaterialCommunityIcons
                        name="login"
                        color={color}
                        size={size}
                    />
                )}
                label="Login"
                onPress={() => { navigation.navigate("LoginScreen" )}}
            />
            <DrawerItem
                style={styles.drawerItem}
                icon={({ color, size }) => (
                    <MaterialCommunityIcons
                        name="account-plus"
                        color={color}
                        size={size}
                    />
                )}
                label="Sign Up"
                onPress={() => { navigation.navigate("RegisterScreen" )}}
            />
            <DrawerItem
                style={styles.drawerItem}
                icon={({ color, size }) => (
                    <MaterialCommunityIcons
                        name="lock-reset"
                        color={color}
                        size={size}
                    />
                )}
                label="Reset Password"
                onPress={() => { navigation.navigate("ForgotPasswordScreen" )}}
            />
        </Drawer.Section>
    );
}
