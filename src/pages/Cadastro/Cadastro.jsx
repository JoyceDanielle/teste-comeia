import React, {useState} from "react";
import { ButtonLogin, GoogleButton } from "../../components/Buttons"
import { InputText } from "../../components/Inputs"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer";
import { Divisor } from "../../components/Divisor";
var validator = require("email-validator");

export default function Cadastro(props){
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [messageFullname, setMessageFullname] = useState('')
    const [username, setUsername] = useState('');
    const [messageName, setMessageName] = useState('');
    const [password, setPassword] = useState('');
    const [messagePassword, setMessagePassword] = useState('');

    const verifyLogin = () => {
        const fullnameInput = document.querySelector("#fullName")
        const usernameInput = document.querySelector("#username")
        const passwordInput = document.querySelector("#password")

        if (fullname === "") {
            setMessageFullname("Este campo não pode ser vazio")
            fullnameInput.classList.remove("input-default")
            fullnameInput.classList.add("input-error");
            setTimeout(() => {
                fullnameInput.classList.add("input-default")
                fullnameInput.classList.remove("input-error");
                setMessageFullname("")
            }, 3000)
        } if (username === "") {
            setMessageName("Este campo não pode ser vazio")
            usernameInput.classList.remove("input-default")
            usernameInput.classList.add("input-error");
            setTimeout(() => {
                usernameInput.classList.add("input-default")
                usernameInput.classList.remove("input-error");
                setMessageName("")
            }, 3000)
        }
        else if (username.length > 0 && !validator.validate(username)){
            setMessageName("O email está incorreto")
            usernameInput.classList.remove("input-default")
            usernameInput.classList.add("input-error");
            setTimeout(() => {
                usernameInput.classList.add("input-default")
                usernameInput.classList.remove("input-error");
                setMessageName("")
            }, 3000)
        }
        console.log('pass', password)
        if (password === "") {
            setMessagePassword("Este campo não pode ser vazio")
            passwordInput.classList.remove("input-default")
            passwordInput.classList.add("input-error");
            setTimeout(() => {
                passwordInput.classList.add("input-default")
                passwordInput.classList.remove("input-error");
                setMessagePassword("")
            }, 3000)
        }else if (password.length <= 6){
            setMessagePassword("A senha não pode pode ter menos de 6 caracteres")
            passwordInput.classList.remove("input-default")
            passwordInput.classList.add("input-error");
            setTimeout(() => {
                passwordInput.classList.add("input-default")
                passwordInput.classList.remove("input-error");
                setMessagePassword("")
            }, 3000)
        }
    }

    return(
        <div className="container-main-child">
             <div className="container-logo">
                <span className="logo-invision">Invision</span>
            </div>
            <p className="greetings-label">Getting Started</p>
            <div className="form-container">
                <div>
                    <InputText label="Full Name" id="fullName"  onChange={setFullname}/>
                    {messageFullname !== "" && (
                        <span className="message-error">{messageFullname}</span>
                    )}
                </div>
                <div>
                    <InputText label="Email" id="username"  onChange={setUsername}/>
                    {messageName !== "" && (
                        <span className="message-error">{messageName}</span>
                    )}
                </div>
                <div>
                    <InputText label="Create Password" type="password" id="password"  onChange={setPassword}/>
                    {messagePassword !== "" && (
                        <span className="message-error">{messagePassword}</span>
                    )}
                </div>
            </div>
            <ButtonLogin text="Sign Up" onClica={verifyLogin}/>
            <Divisor/>
            <GoogleButton text="Sign Up with Google" />
            <span className="text-cadastro">Já está no invision ? <span className="link-style" onClick={() => navigate("/")}>Entre</span></span>

            <Footer/>
        </div>
    )
}