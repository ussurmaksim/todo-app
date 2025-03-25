import React from "react"
import {Link, Navigate} from "react-router-dom";
import {signIn} from "../services/api";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirectToTasks: false,
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signIn({
                email: this.state.email,
                password: this.state.password
            });
            const token = response.data;
            localStorage.setItem('token', token);
            this.setState({redirectToTasks: true})
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        if (this.state.redirectToTasks) {
            return <Navigate to={'/tasks'} />;
        }

        return (
            <div className="login-page">
                <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <h1 className="text-center">Авторизация</h1>
                    <input className="reg-form-input" type="email" name="email" placeholder="Введите ваш e-mail"
                           onChange={(e) => this.handleChange(e)} value={this.state.email} />

                    <input className="reg-form-input" type="password" name="password" placeholder="Введите ваш пароль"
                           onChange={(e) => this.handleChange(e)} value={this.state.password}/>

                    <Link className="help-link" to={'/'}>Забыли пароль?</Link>
                    <button className="btn btn-custom-white">Зарегистрироваться</button>

                    <Link className="help-link text-center d-block" to={'/registration'}>Создать аккаунт</Link>
                </form>
            </div>
        )
    }
}

export default LoginPage