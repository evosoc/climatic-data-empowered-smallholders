import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {
    HomePage,
} from "../pages";
import {ForgotPasswordScreen, HomeScreen, LoginScreen, RegisterScreen} from "../user-auth/screens";
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {Header} from "./Header";
import {Pages} from "@common";
import Community from "../pages/Community";
import CommunityPost from "../pages/CommunityPost";
import ProfilePage from "../pages/ProfilePage";

const Stack = createStackNavigator();

const StackNavigator = (props, state) => {
    const screenOptions: any = {
        header: (props) => <Header {...props} />
    };

    let initialRouteName = Pages.HomeScreen;
    // TODO: Fix
    //if (props.isLoggedIn) {
        initialRouteName = Pages.Home;
    //}

    return (
        <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={screenOptions}>
            <Stack.Screen
                name={Pages.HomeScreen}
                component={HomeScreen}
                options={{  headerShown: false }}
            />
            <Stack.Screen
                key={Pages.Home}
                name={Pages.Home}
                component={HomePage}
                options={{ headerTitle: 'Home' }}
            />
            <Stack.Screen
                key={Pages.Community}
                name={Pages.Community}
                component={Community}
                options={{ headerTitle: 'Community' }}
            />
            <Stack.Screen
                key={Pages.CommunityPost}
                name={Pages.CommunityPost}
                component={CommunityPost}
                options={{ headerTitle: 'Community Post' }}
            />
            <Stack.Screen
                key={Pages.Profile}
                name={Pages.Profile}
                component={ProfilePage}
                options={{ headerTitle: 'Profile' }}
            />
            <Stack.Screen
                key={Pages.LoginScreen}
                name={Pages.LoginScreen}
                options={{  headerShown: false }}
                component={LoginScreen}
            />
            <Stack.Screen
                key={Pages.RegisterScreen}
                name={Pages.RegisterScreen}
                options={{  headerShown: false }}
                component={RegisterScreen} />
            <Stack.Screen
                key={Pages.ForgotPasswordScreen}
                name={Pages.ForgotPasswordScreen}
                options={{  headerShown: false }}
                component={ForgotPasswordScreen} />

        </Stack.Navigator>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigator);
