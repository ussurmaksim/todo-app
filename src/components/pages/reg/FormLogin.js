import React from "react"

class FormLogin extends React.Component {
    render() {
        return (
            <form className="form mt-5 d-flex flex-column align-items-center"
                  onSubmit={(e) => {this.props.handleNext(e);}}
            >
                <input type="text" name="name" placeholder="Введите ваше имя"   />
                <p className="errorInput"></p>
                <input type="tel" name="tel" placeholder="Введите ваш телефон"  />
                <p className="errorInput"></p>
                <input type="number" name="name" placeholder="Введите ваше имя" />
                <p className="errorInput"></p>

                <button className="btn btn-dark w-100">
                    Зарегистрироваться
                </button>
            </form>
        )
    }
}

export default FormLogin;