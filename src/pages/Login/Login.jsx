import React, { useState } from "react"
import { ButtonLogin, GoogleButton } from "../../components/Buttons"
import { InputText } from "../../components/Inputs"
import { useNavigate } from "react-router-dom"
var validator = require("email-validator");

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [messageEmail, setMessageEmail] = useState("")
    const [messagePassword, setMessagePassword] = useState("")

    const verifyLogin = () => {
        const emailInput = document.querySelector("#email")
        const passwordInput = document.querySelector("#password")

        if (email === "") {
            setMessageEmail("Este campo não pode ser vazio")
            emailInput.classList.remove("input-default")
            emailInput.classList.add("input-error");
            setTimeout(() => {
                emailInput.classList.add("input-default")
                emailInput.classList.remove("input-error");
                setMessageEmail("")
            }, 3000)
        } if (password === "") {
            setMessagePassword("Este campo não pode ser vazio")
            passwordInput.classList.remove("input-default")
            passwordInput.classList.add("input-error");
            setTimeout(() => {
                passwordInput.classList.add("input-default")
                passwordInput.classList.remove("input-error");
                setMessagePassword("")
            }, 3000)
        }
        console.log(email)
        if (email.length > 0 && !validator.validate(email)){
            setMessageEmail("O email está incorreto")
            emailInput.classList.remove("input-default")
            emailInput.classList.add("input-error");
            setTimeout(() => {
                emailInput.classList.add("input-default")
                emailInput.classList.remove("input-error");
                setMessageEmail("")
            }, 3000)
        }
    }

    return (
        <div className="container-main-child">
            <div className="container-logo">
                <span className="logo-invision">Invision</span>
            </div>
            <p className="greetings-label">Getting Started</p>
            <div className="form-container">
                <div>
                    <InputText label="Email" id="email" onChange={text => setEmail(text)} />
                    {messageEmail !== "" && (
                        <span className="message-error">{messageEmail}</span>
                    )}
                </div>
                <div>
                    <InputText label="Password" type="password" id="password" onChange={text => setPassword(text)} />
                    {messagePassword !== "" && (
                        <span className="message-error">{messagePassword}</span>
                    )}
                </div>
            </div>
            <ButtonLogin text="Sign In" onClica={verifyLogin} />
            <GoogleButton text="Sign In with Google" />
            <span className="text-cadastro">Novo no invision ? <span className="link-style" onClick={() => navigate("/cadastro")}>Crie uma conta</span></span>
        </div>
    )
}