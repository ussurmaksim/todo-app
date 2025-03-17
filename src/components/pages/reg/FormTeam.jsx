import React from "react"

class FormTeam extends React.Component {
    render() {
        return (
            <form className="form mt-5 d-flex flex-column align-items-center"
                  onSubmit={(e) => {this.props.handleNext(e);}}
            >
                <input type="text" name="name" placeholder="Введите ваше имя"   />

                <input type="tel" name="tel" placeholder="Введите ваш телефон"  />

                <input type="number" name="name" placeholder="Введите ваше имя" />


                <button className="btn btn-dark w-100">
                    Продолжить
                </button>
            </form>
        )
    }
}

export default FormTeam;