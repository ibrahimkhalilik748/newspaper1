import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import firebaseConfig from './firebaseConfig';
import './LogIn.css'

const LogIn = () => {
    const { value, value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [newUser, setNewUser] = value1;
    // console.log(loggedInUser)
    const history = useHistory(); 
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/profile" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photoURL }
            setLoggedInUser(signedInUser);
            setNewUser(signedInUser);
            //   console.log(result.user)
            //  history.push('/')
            history.replace(from)
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="LogIn">
            <div className="container text-center"><br /><br /><br /><br /><br /><br /><br />
                <button className="btn button btn-outline-info pb-2" onClick={handleGoogleLogIn}><img style={{ width: '20%', paddingRight: '20px' }} src="https://symbols-electrical.getvecta.com/stencil_82/45_google-icon.d8d982f8a1.svg" alt="" />{newUser ? 'Log Out' : 'Log In to Google'}</button>
            </div>
        </div>
    );
};

export default LogIn;