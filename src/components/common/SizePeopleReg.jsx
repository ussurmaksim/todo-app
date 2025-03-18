import React from "react"

class SizePeopleReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="form_radio_btn">
                <input id={`radio-${this.props.item.id}`} type="radio" name="radio" value="1" checked />
                <label htmlFor={`radio-${this.props.item.id}`}> {this.props.item.size}</label>
            </div>
        )
    }
}

export default SizePeopleReg;