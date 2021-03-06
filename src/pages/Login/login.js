import React, { useState } from 'react';
import api from '../../services/api';
import './login.css'

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await api.post('auth/login',
            {
                "email": email,
                "password": password
            });
        const company_id = response.data['data']['user']['companies'][0]['id'];
        const token = response.data['data']['token'];
        localStorage.setItem('companie_id', company_id);
        localStorage.setItem('token_user', token);
        history.push('/property');
    }


    return (
        <div className="container">

            <div className="login__container">
                <h1 className="login-title">Easy Real Estate</h1>
                <div className="login__form">

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">E-MAIL</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                        onChange={event => setEmail(event.target.value)}
                        />
                        <label htmlFor="email">Senha</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                        onChange={event => setPassword(event.target.value)}
                        />
                        <div>
                            <button className="btn" type="submit">Entrar</button>
                        </div>

                    </form>
                </div>
                <span className="span">
            "email": "owner@company3.com",
                "password": "$ecret123"
            </span>
            </div>
            
        </div>

    );
}