import React from "react"
import {Link} from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {email, password} = ""
        return (
            <div className="login-page">
                <form className="login-form" onSubmit={(e) => {
                    e.preventDefault();

                }}>
                    <h1 className="text-center">Авторизация</h1>
                    <input className={`reg-form-input`} type="email" name="email" placeholder="Введите ваш e-mail"
                           onChange={(e) => this.handleChange(e)} value={this.state.email} />
                    <input className={`reg-form-input`} type="password" name="password" placeholder="Введите ваш пароль"
                           onChange={(e) => this.handleChange(e)} value={this.state.password}/>
                    <Link className="help-link" to={'/'}>Забыли пароль?</Link>
                    <button className={` btn btn-custom-white`}>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}

export default LoginPage