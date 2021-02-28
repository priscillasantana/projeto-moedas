import { TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'



function Cadastro () {

    let emailInput = useRef<HTMLInputElement>(null)
    let passwordInput = useRef<HTMLInputElement>(null)

    const [logado, setLogado] = useState<Boolean>(false)
    
    const enviaForm = () => {
         
        const email = emailInput.current?.value
        const password = passwordInput.current?.value
  
            axios.post("http://localhost:4000/register", {
            email: email,
            password: password,
        })
            .then(resposta => {
                localStorage.setItem("token", resposta.data.accessToken)
                setLogado(true)
            })}

    return (
        <div>

                <h1 className='cadastro'>Cadastre-se aqui</h1>

                <TextField label='email' type="email" placeholder="Digite seu e-mail" inputRef={emailInput} /> <br />
                <TextField label='senha' type="password" placeholder="Digite sua senha" inputRef={passwordInput} /> <br />

                <button onClick={enviaForm} className="btn-cad">enviar</button>

            {logado && <Redirect to= "/moedas" />}
        </div>
    )
};

export default Cadastro;