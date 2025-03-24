import React from "react"

class SizePeopleReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountPeopleSelected: this.props.amountPeopleSelected
        }
    }

    handleSelector = (id) => {
        this.setState({amountPeopleSelected: id}, () => {
            this.props.handleAmountPeopleSelected(id)
        } )
    }

    handleChange = (event) => {
        const id = parseInt(event.target.value, 10); // Важно: Преобразуем value в число
        this.handleSelector(id);
    }

    render() {
        const { amountPeopleSelected } = this.state;
        const { amountPeople } = this.props;
        return (
            <ul className="list-sizes">
                {
                    amountPeople.map((item) => (
                        <li key={item.id} className="list-size-item">
                            <div className="form-radio-btn">
                                <input
                                    id={item.id}
                                    type="radio"
                                    name="radio"
                                    value={item.id}
                                    checked={item.id === amountPeopleSelected}
                                    onChange={this.handleChange} // Заменили onClick на onChange
                                />
                                <label htmlFor={item.id}> {item.size}</label>
                            </div>
                        </li>
                    ))
                }
            </ul>

        )
    }
}

export default SizePeopleReg;