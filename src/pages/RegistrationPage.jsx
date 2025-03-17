import React from "react"
import FormInfo from "../components/pages/reg/FormInfo";
import FormTeam from "../components/pages/reg/FormTeam";
import FormLogin from "../components/pages/reg/FormLogin";
import {Link} from "react-router-dom";

class RegPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phone: "",
            age: "",
            amountWorkers: 1,
            job: "",
            role: "",
            email: "",
            password: "",
            password2: "",
            regStep: 1,
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.getFormInfoData = this.getFormInfoData.bind(this);
    }

    handleNext = (e) => {
        e.preventDefault();
        if (this.state.regStep <3) {
            this.setState({regStep: this.state.regStep + 1});
        }else {
            console.log(this.state.regStep);
        }
    }

    handleBack = () => {
        if (this.state.regStep > 0) {
            this.setState({regStep: this.state.regStep - 1});
        }
    }

    getFormInfoData = (name,phone,age) => {
        this.setState({name, phone, age});
    }







    render() {
        const step = this.state.regStep;
        return (

            <div className="container">
                <h1 className="regHeading">{step !== 2 ? "Регистрация" : "Расскажи о себе"}</h1>
                <div className="stepsWrapper row gap-5">
                    <div className={`step col ${step === 1 ? "active" : ""}`}></div>
                    <div className={`step col ${step === 2 ? "active" : ""}`}></div>
                    <div className={`step col ${step === 3 ? "active" : ""}`}></div>
                </div>

                <div className="regForm">
                    {
                        step === 1 ? <FormInfo
                                        getFormInfoData = {this.getFormInfoData}
                                        handleNext={this.handleNext}
                                        name={this.state.name}
                                        phone={this.state.phone}
                                        age={this.state.age}
                                    />
                            :
                            step === 2 ? <FormTeam handleNext={this.handleNext} />
                                :
                                <FormLogin handleNext={this.handleNext} />
                    }


                <div className="d-flex justify-content-center mt-2">
                    {step !== 1 && <p className="btn" onClick={() => {this.handleBack();}}>Назад</p>}
                    {step === 1 && <Link to={"/login"}>Уже есть аккаунт? Войдите</Link>}
                </div>
                </div>


            </div>
        )
    }
}
export default RegPage;