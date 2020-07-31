import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {googleLogin} from "@services/auth";
import Button from "./Button";

interface GoogleLoginButtonProps {
    onLogin?: (result?: any) => void;
    setGoogleOauthResult: (result) => void;
    loggedIn: (result) => void;
    loadingStarted: () => void;
    loadingEnded: () => void;
}

const GoogleLoginButton = (props: GoogleLoginButtonProps) => {

    const signIn = async () => {
        try {
            props.loadingStarted();
            const result: any = await googleLogin();

            if (!result) {
                return alert("RESULT: There was an error logging in.  Please try again");
            }

            props.setGoogleOauthResult(result.googleLoginResult);
            props.loggedIn(result.user);

            if (props.onLogin) {
                props.onLogin(result);
            }
        } catch (e) {
            console.log(e);
            alert("There was an error logging in.  Please try again.");
        } finally {
            props.loadingEnded();
        }
    };

    return (<Button {...props}  onPress={signIn}>Sign in with Google</Button>)
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton);
