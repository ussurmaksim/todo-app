import React from "react"

class FormLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password2: "",
            errorPassword: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validatePassword = () => {
        const { password, password2} = this.state;
        if (password !== password2) {
            this.setState({errorPassword: "Пароль не совпадает"});
            return false;
        }else {
            this.setState({errorPassword: ""});
            return true;
        }
    }

    render() {
        const {errorPassword} = this.state;
        return (
            <form className="form mt-5 d-flex flex-column"
                  onSubmit={(e) => {
                      e.preventDefault();
                      if (this.validatePassword()) {
                          this.props.handleNext(e);
                      }
                  }}
            >

                <input value={this.state.email} type="mail" className="regFormInput" name="email" placeholder="Введите ваш e-mail" onChange={(e) => this.handleChange(e)}/>
                <input value={this.state.password} type="password" className="regFormInput" name="password" placeholder="Создать пароль" onChange={(e) => this.handleChange(e)}/>
                <input value={this.state.password2} type="password" className="regFormInput" name="password2" placeholder="Подтвердить пароль" onChange={(e) => this.handleChange(e)}/>
                {errorPassword && <p className="errorInput">{errorPassword}</p>}


                <button className="btn btn-dark w-100">
                    Зарегистрироваться
                </button>
            </form>
        )
    }
}

export default FormLogin;