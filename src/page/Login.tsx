import React from "react";
import logoImg from '../img/intro_logo.png';
import AuthForm from "../component/AuthForm";

function Login() {

    return (
        <div id="content">
            <img className="logoImg" src={logoImg} alt="Logo"/>
            <AuthForm />
        </div>
    )
}

export default Login;