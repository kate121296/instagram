import React, {useEffect} from 'react';
import { getOr } from 'lodash/fp';
import {useSnackbar} from "notistack";
import withFirebaseAuth from "react-auth-firebase";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-firebase'

import firebase from "./firebaseConfig";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import HomePage from "./components/HomePage/HomePage";
import EditProfile from "./components/EditProfile/EditProfile";

function App({
    editUserProfile,
    usersProfile,
    addUserProfile,
    signUpWithEmail,
    signInWithEmail,
    user,
    error,
 }) {
    const uid = getOr(null, ['uid'], user);
    let userProfile = null;
    if(usersProfile) {
        for (const i in usersProfile) {
            if (usersProfile[i].userId === uid) {
                userProfile = {
                    profileId: i,
                    ...usersProfile[i]
                }
            }
        }
    }
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
                {uid ? (
                    <Route
                        exact path="/"
                        component={() => <HomePage
                            uid={uid}
                        />
                        }
                    />
                ) : (
                    <Route
                        exact path="/"
                        component={() => <WelcomePage
                            onSignUp={signUpWithEmail}
                            uid={uid}
                        />
                        }
                    />
                )}
                <Route
                    path="/login"
                       component={() => <LoginScreen
                           uid={uid}
                           onSignIn={signInWithEmail}
                       />}
                />
                <Route
                    path="/edit"
                    component={() => <EditProfile
                        uid={uid}
                        userProfile={userProfile}
                        onAddUserProfile={addUserProfile}
                        onEditUserProfile={editUserProfile}
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

const component = withFirebaseAuth(App, firebase, authConfig)
const mapFirebaseToProps = (props, ref) => ({
    usersProfile: 'usersProfile',
    addUserProfile: userProfile => ref('usersProfile').push(userProfile),
    editUserProfile: (userProfile, profileId) => ref(`usersProfile/${profileId}`).set(userProfile),
});

export default connect(mapFirebaseToProps)(component)