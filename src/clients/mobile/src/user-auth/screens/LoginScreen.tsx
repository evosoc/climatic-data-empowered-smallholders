import React, { useState } from 'react';
import {connect} from 'react-redux';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Navigation } from '../types';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {Logo, Background, BackButton, Header, TextInput, Button, ErrorDialog} from '@components';
import {basicLogin, BasicLoginRequest} from "@services/auth";
import {emailValidator, passwordValidator} from "../../core/utils";
import {theme} from "../../core/theme";
import {Title} from "react-native-paper";
import {Pages} from "@common";

type Props = {
    navigation: Navigation;
    loggedIn: (user) => void;
};

const LoginScreen = (props) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [error, setError] = useState({ value: '', message: '' });

    const _onLoginPressed = async () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        try {
            props.loadingStarted();
            const req = new BasicLoginRequest({ email: email.value, password: password.value });
            const result = await basicLogin(req);
            props.loggedIn(result);
            props.navigation.navigate(Pages.Home);
        } catch (e) {
            setError({
                ...e,
                value: e.appStatus,
                message: e.message,
            });
        } finally {
            props.loadingEnded();
        }
    };

    return (
        <Background>
            <ErrorDialog message={error.message} visible={!!error.message} hideDialogPress={() => setError({ message: '', value: ''})}/>
            <BackButton goBack={() => props.navigation.navigate('HomeScreen')} />
            <Logo />
            <Header>WeatherDirect</Header>

            <Title>Login</Title>

            <TextInput
                label="Email Address"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ForgotPasswordScreen')}
                >
                    <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button mode="contained" onPress={_onLoginPressed}>
                Login
            </Button>

            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
