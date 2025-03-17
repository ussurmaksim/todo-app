import React from "react"

class RegPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            regStep: 1,
        }

        this.handleNext = this.handleNext.bind(this);
    }

    handleNext = () => {
        if (this.state.regStep <3) {
            this.setState({regStep: this.state.regStep + 1});
        }else {
            console.log(this.state.regStep);
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="regHeading">Регистрация</h1>
                <div className="stepsWrapper row gap-3">
                    <div className={`step col ${this.state.regStep === 1 ? "active" : ""}`}></div>
                    <div className={`step col ${this.state.regStep === 2 ? "active" : ""}`}></div>
                    <div className={`step col ${this.state.regStep === 3 ? "active" : ""}`}></div>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-5">
                    <button className="btn btn-dark w-25" onClick={() => {this.handleNext();}}>
                        {this.state.regStep === 3 ? "Зарегистрироваться" : "Продолжить"}
                    </button>
                </div>
            </div>
        )
    }
}
export default RegPage;