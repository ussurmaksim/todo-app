import React from "react"

class FormInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            phone: this.props.phone,
            age: this.props.age,
            nameError: "",
            phoneError: "",
            ageError: "",
            isValid: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            this.validate();
        });

    }

    validate = () => {
        let nameError = "";
        let phoneError = "";
        let ageError = "";
        let isValid = true;

        if (!this.state.name) {
            nameError = "Введите имя";
            isValid = false;
        }

        if (!this.state.phone) {
            phoneError = "Введите телефон"
            isValid = false;
        }else if(!/^\d+$/.test(this.state.phone)) {
            phoneError = "телефон должен содержать только цифры"
            isValid = false;
        }

        if (!this.state.age) {
            ageError = "Введите возраст";
            isValid = false;
        }else if (isNaN(this.state.age)) {
            ageError = "Возраст должен быть числом";
            isValid = false;
        }else if ( this.state.age < 1 || this.state.age > 100 ) {
            ageError = "Введены не верный возраст";
            isValid = false;
        }

        this.setState({ nameError, phoneError, ageError, isValid });

        return isValid;
    }

    render() {
        return (
            <form className="form mt-5 d-flex flex-column"
                  onSubmit={(e) => {
                      this.props.handleNext(e);
                      if (this.validate()) {
                          this.setState({
                              nameError: "",
                              phoneError: "",
                              ageError: "",
                          })
                      }
                      this.props.getFormInfoData(this.state.name, this.state.phone, this.state.age);
                  }}
            >

                <input type="text" name="name" placeholder="Введите ваше имя" value={this.state.name}
                       onChange={(e) => this.handleChange(e)}/>
                    {this.state.nameError && (<p className="errorInput">{this.state.nameError}</p>)}

                <input type="tel" name="phone" placeholder="Введите ваш телефон" value={this.state.phone}
                       onChange={(e) => this.handleChange(e)}/>
                    {this.state.phoneError && (<p className="errorInput">{this.state.phoneError}</p>)}

                <input type="number" name="age" placeholder="Введите ваш возраст" value={this.state.age}
                       onChange={(e) => this.handleChange(e)}/>
                    {this.state.ageError && (<p className="errorInput">{this.state.ageError}</p>)}


                <button className="btn btn-dark w-100 mt-3" disabled={!this.state.isValid}>
                    Продолжить
                </button>
            </form>
        )
    }
}

export default FormInfo;