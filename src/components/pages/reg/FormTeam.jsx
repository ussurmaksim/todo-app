import React from "react"
import SizePeopleReg from "../../common/SizePeopleReg";

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
            amountPeopleSelected: ""

        }
    }
    render() {
        return (
            <form className="form mt-5 d-flex flex-column align-items-center"
                  onSubmit={(e) => {this.props.handleNext(e);}}
            >
                <ul className="listSizes">
                    {
                        this.state.amountPeopleJSON.map((item) => (
                            <li key={item.id} className="listSizeItem">
                                <SizePeopleReg item={item} />
                            </li>
                        ))
                    }
                </ul>
                <button className="btn btn-dark w-100">
                    Продолжить
                </button>
            </form>
        )
    }
}

export default FormTeam;