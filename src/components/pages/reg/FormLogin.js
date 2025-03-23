import React from "react";

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: this.props.password,
            password2: "",
            errorPassword: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            this.props.setLoginData(this.state.email, this.state.password);
        });
    };

    validatePassword = () => {
        const { password, password2 } = this.state;
        if (password !== password2) {
            this.setState({ errorPassword: "Пароль не совпадает" });
            return false;
        } else if (password === "") {
            this.setState({ errorPassword: "Заполните пароль" });
            return false;
        } else {
            this.setState({ errorPassword: "" });
            return true;
        }
    };

    render() {
        const { errorPassword } = this.state;
        return (
            <form
                className="form mt-5 d-flex flex-column"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (this.validatePassword()) {
                        this.props.validReg();
                        this.props.setLoginData(this.state.email, this.state.password);
                        this.props.postSignUp();
                    }
                }}
            >
                <input
                    value={this.state.email}
                    type="mail"
                    className="regFormInput"
                    name="email"
                    placeholder="Введите ваш e-mail"
                    onChange={this.handleChange}
                />
                <input
                    value={this.state.password}
                    type="password"
                    className="regFormInput"
                    name="password"
                    placeholder="Создать пароль"
                    onChange={this.handleChange}
                />
                <input
                    value={this.state.password2}
                    type="password"
                    className="regFormInput"
                    name="password2"
                    placeholder="Подтвердить пароль"
                    onChange={this.handleChange}
                />
                {errorPassword && <p className="errorInput">{errorPassword}</p>}
                <button className="btn btn-dark w-100">Зарегистрироваться</button>
            </form>
        );
    }
}

export default FormLogin;