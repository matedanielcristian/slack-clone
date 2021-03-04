import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';

function Login() {
    const signIn = (e) => {
        e.preventDefault();

        //
        auth.signInWithPopup(provider).catch(err => {
            alert(err.message)
        })

    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" ></img>
                <h1>Sign in to the Slack clone</h1>
                <p>mdc.slack.com</p>
                <Button onClick={ signIn }>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
    background: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`

padding: 100px;
text-align: center;
background-color: #fff;
border: 10px;


    >img {
        object-fit:contain;
        height: 100px;
        margin-bottom: 40px;
    }

    >button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: #fff;
    }
`;