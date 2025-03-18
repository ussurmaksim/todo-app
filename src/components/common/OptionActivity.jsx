import React from "react"

class OptionActivity extends React.Component {

    render() {
        return (
            <>
                {this.props.item.userActivity}
            </>
        )
    }
}

export default OptionActivity;