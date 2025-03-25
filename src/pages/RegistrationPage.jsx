import React from "react"
import FormInfo from "../components/pages/reg/FormInfo";
import FormTeam from "../components/pages/reg/FormTeam";
import FormLogin from "../components/pages/reg/FormLogin";
import {Link, Navigate} from "react-router-dom";
import { signUp } from "../services/api"

class RegPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phone: "",
            age: "",
            amountWorkers: 1,
            activity: [],
            role: 1,
            email: "",
            password: "",

            regStep: 1,
            isValid: false,
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.getFormInfoData = this.getFormInfoData.bind(this);
        this.setFormTeamData = this.setFormTeamData.bind(this);
        this.setLoginData = this.setLoginData.bind(this);
    }

    handleNext = (e) => {
        e.preventDefault();
        if (this.state.regStep <3) {
            this.setState({regStep: this.state.regStep + 1});
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

    setFormTeamData = (amountWorkers, activity, role) => {
        this.setState({ amountWorkers, activity, role });
    }

    setLoginData = (email, password) => {
        this.setState({email, password});
    }

    validReg = () => {
        this.setState({ isValid: true });
    }



    postSignUp = () => {
        signUp({
            name: this.state.name,
            phoneNumber: this.state.phone,
            age: this.state.age,
            teamSize: this.state.amountWorkers,
            userActivities: this.state.activity,
            userRole: this.state.role,
            email: this.state.email,
            password: this.state.password,
        })
    }

    render() {
        const step = this.state.regStep;
        if (this.state.isValid) {
            return (
                <Navigate to={'/login'} />
            )
        }
        return (
            <div className="container">
                <h1 className="reg-heading">{step !== 2 ? "Регистрация" : "Расскажи о себе"}</h1>
                <div className="steps-wrapper row gap-5">
                    <div className={`step col ${step === 1 ? "active" : ""}`}></div>
                    <div className={`step col ${step === 2 ? "active" : ""}`}></div>
                    <div className={`step col ${step === 3 ? "active" : ""}`}></div>
                </div>

                <div className="reg-form">
                    {
                        step === 1 ? <FormInfo
                                        getFormInfoData = {this.getFormInfoData}
                                        handleNext={this.handleNext}
                                        name={this.state.name}
                                        phone={this.state.phone}
                                        age={this.state.age}
                                    />
                            :
                            step === 2 ? <FormTeam
                                    handleNext={this.handleNext}
                                    setFormTeamData={this.setFormTeamData}
                                    activity={this.state.activity}
                                    amountWorkers={this.state.amountWorkers}
                                    role={this.state.role}
                                />
                                :
                                <FormLogin
                                    handleNext={this.handleNext}
                                    setLoginData = {this.setLoginData}
                                    email={this.state.email}
                                    password={this.state.password}
                                    validReg={this.validReg}
                                    postSignUp={this.postSignUp}
                                />
                    }


                <div className="d-flex justify-content-center mt-2">
                    {step !== 1 && <p className="btn btn-back" onClick={() => {this.handleBack();}}>Назад</p>}
                    {step === 1 && <Link to={"/login"}>Уже есть аккаунт? Войдите</Link>}
                </div>
                </div>


            </div>
        )
    }
}
export default RegPage;