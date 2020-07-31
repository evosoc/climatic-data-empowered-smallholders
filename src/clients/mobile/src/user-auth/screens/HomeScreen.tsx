import React, { memo } from 'react';
import { Navigation } from '../types';
import {Background, Logo, Header, Button, GoogleLoginButton} from '@components';
import {Title} from "react-native-paper";
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {Pages} from "@common";

type Props = {
    navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
    const _onLogin = () => {
        navigation.navigate(Pages.Home);
    };

    return (
        <Background>
            <Logo />
            <Header>WhetherWeather</Header>
            <Title>Welcome!</Title>

            <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
                Login
            </Button>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                Sign Up
            </Button>
            <GoogleLoginButton mode="outlined" onLogin={_onLogin} />
        </Background>)
};

export default  connect(mapStateToProps, mapDispatchToProps)(memo(HomeScreen));
