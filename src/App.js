import React, {useEffect} from 'react';
import { getOr } from 'lodash/fp';
import {useSnackbar} from "notistack";
import firebase from "./firebaseConfig";
import withFirebaseAuth from "react-auth-firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage/WelcomePage";
import LoginScreen from "./components/LoginScreen/LoginScreen";


function App({
     signUpWithEmail,
     signInWithEmail,
     user,
     error,
 }) {
    const uid = getOr(null, ['uid'], user);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (error) {
            if (error.message.includes('Reference.child failed: First argument was an invalid path = "undefined". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')) {
                enqueueSnackbar('Account created successfully!', { variant: 'success' });
            }
            else enqueueSnackbar(error.message, { variant: 'warning' });
        }
    }, [enqueueSnackbar, error]);
    return (
        <div>
            <Router>
                <Route
                    exact path="/"
                    component={() => <WelcomePage
                        onSignUp={signUpWithEmail}
                        uid={uid}
                    />
                    }
                />
                <Route
                    path="/login"
                       component={() => <LoginScreen
                           uid={uid}
                           onSignIn={signInWithEmail}
                       />}
                />
            </Router>
        </div>
    );
}


const authConfig = {
    email: {
        verifyOnSignup: false,
        saveUserInDatabase: true
    },
};

export default withFirebaseAuth(App, firebase, authConfig);