import React from "react"
import SizePeopleReg from "../../common/SizePeopleReg";
import OptionActivity from "../../common/OptionActivity";

class FormTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountPeopleJSON: [
                {
                    id: 1,
                    size: "Только я"
                },
                {
                    id: 2,
                    size: "2-6"
                },
                {
                    id: 3,
                    size: "6-10"
                },
            ],
            amountPeopleSelected: "",

            activitiesPeople: [
                {
                    id: 1,
                    userActivity: "HR"
                },
                {
                    id: 2,
                    userActivity: "Создание продукта"
                },
                {
                    id: 55,
                    userActivity: "Создание"
                }
            ],
            selectedActivities: [],
        }

        this.handleActivity = this.handleActivity.bind(this);
    }


    handleActivity = (id) => {
        this.setState( (prevState) => {
            const { selectedActivities } = prevState;

            if(selectedActivities.includes(id)){
                return {
                    selectedActivities: selectedActivities.filter((item) => item !== id),
                }
            } else {
                return {
                    selectedActivities: [...selectedActivities, id]
                }
            }
        })
    }

    render() {
        return (
            <form className="form mt-5 d-flex flex-column"
                  onSubmit={(e) => {this.props.handleNext(e);}}
            >
                <p className="teamHeading">Со скольки людьми ты будешь работать?</p>
                <ul className="listSizes">
                    {
                        this.state.amountPeopleJSON.map((item) => (
                            <li key={item.id} className="listSizeItem">
                                <SizePeopleReg item={item} />
                            </li>
                        ))
                    }
                </ul>

                <p className="teamHeading">Какие активности ты будешь выполнять?</p>
                <select name="" id="" multiple // Добавлено свойство multiple для выбора нескольких опций
                        onChange={(e) => { // Добавлен обработчик onChange для отслеживания изменений
                            const selectedOptions = Array.from(e.target.selectedOptions).map(option => parseInt(option.value)); // Получаем массив выбранных ID
                            this.setState({ selectedActivities: selectedOptions }); // Обновляем состояние
                        }}
                >
                    {
                        this.state.activitiesPeople.map((item) => (
                            <option value={item.id} key={item.id}> {/* Используем item.id как value */}
                                <OptionActivity item={item} />
                            </option>
                        ))
                    }
                </select>
                <div>
                    <p className="text-white">Selected Activities: {this.state.selectedActivities.join(', ')}</p> {/* Отображение выбранных ID */}
                </div>
                <button className="btn btn-dark w-100">
                    Продолжить
                </button>
            </form>
        )
    }
}

export default FormTeam;
