import React from "react"
import SizePeopleReg from "../../common/SizePeopleReg";
import ActivitySelector from "../../common/ActivitySelector";
import RoleSelector from "../../common/RoleSelector";

class FormTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountPeople: [
                {
                    id: 1,
                    size: "Только я"
                },
                {
                    id: 2,
                    size: "2-5"
                },
                {
                    id: 3,
                    size: "6-10"
                },
                {
                    id: 4,
                    size: "11-25"
                },
                {
                    id: 5,
                    size: "26-50"
                },
                {
                    id: 6,
                    size: "51-100"
                },
                {
                    id: 7,
                    size: "100+"
                }
            ],
            amountPeopleSelected: this.props.amountWorkers,

            activitiesPeople: [
                {
                    id: 1,
                    userActivity: "HR"
                },
                {
                    id: 2,
                    userActivity: "Создание продукта1"
                },
                {
                    id: 3,
                    userActivity: "Создание"
                },
                {
                    id: 4,
                    userActivity: "Создание продукта"
                },
                {
                    id: 5,
                    userActivity: "Создание продукта"
                },
                {
                    id: 6,
                    userActivity: "Создание продукта"
                },
            ],
            selectedActivities: this.props.activity,

            roles: [
                {
                    id: 1,
                    userRole: "Член команды"
                },
                {
                    id: 2,
                    userRole: "Лидер команды"
                },
                {
                    id: 3,
                    userRole: "Владелец бизнеса"
                }
            ],
            selectedRole: this.props.role,
        }

        this.handleActivity = this.handleActivity.bind(this);
        this.handleAmountPeopleSelected = this.handleAmountPeopleSelected.bind(this);
        this.handleRole = this.handleRole.bind(this);
    }

    handleActivity = (selectedActivities) => {
        this.setState({selectedActivities})
    }

    handleAmountPeopleSelected = (amountPeopleSelected) => {
        this.setState({amountPeopleSelected})
    }

    handleRole = (selectedRole) => {
        this.setState({selectedRole})
    }

    render() {
        const {selectedActivities, amountPeopleSelected, selectedRole} = this.state;
        return (
            <form className="form mt-5 d-flex flex-column"
                  onSubmit={(e) => {
                      this.props.setFormTeamData(amountPeopleSelected, selectedActivities, selectedRole);
                      this.props.handleNext(e);
                  }}
            >
                <p className="teamHeading">Со скольки людьми ты будешь работать?</p>

                <SizePeopleReg amountPeople={this.state.amountPeople} amountPeopleSelected={this.state.amountPeopleSelected} handleAmountPeopleSelected={this.handleAmountPeopleSelected}/>

                <p className="teamHeading">Какие активности ты будешь выполнять?</p>

                <ActivitySelector activitiesPeople={this.state.activitiesPeople} handleActivity={this.handleActivity} selectedActivities={this.state.selectedActivities}/>

                <p className="teamHeading">Какая у тебя роль?</p>

                <RoleSelector roles={this.state.roles} selectedRole={this.state.selectedRole} handleRole={this.handleRole} />

                <button className="btn btn-dark w-100 mt-5">
                    Продолжить
                </button>
            </form>
        )
    }
}

export default FormTeam;
