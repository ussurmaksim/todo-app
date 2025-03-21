import React from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


class RoleSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownIsOpen: false,
            roles: this.props.roles,
            selectedRole: this.props.selectedRole,
        }

        this.handleSelector = this.handleSelector.bind(this);
        this.handleRole = this.handleRole.bind(this);
    }

    handleSelector = () => {
        this.setState((prevState) =>({dropdownIsOpen: !prevState.dropdownIsOpen}));
    }

    handleRole = (id) => {
        this.setState({selectedRole: id}, () => {
            this.props.handleRole(id);
        })
        this.handleSelector()
    }

    render() {
        return (
            <div className="role-selector ">
                <div className="role-selector-container regFormInput m-0" onClick={() => this.handleSelector()}>
                    <span> {this.state.roles[this.state.selectedRole-1].userRole}</span>
                    {this.state.dropdownIsOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
                {
                    this.state.dropdownIsOpen && (
                        <div className="dropdown">
                            {
                                this.state.roles.map((role) => (
                                    <div
                                        key={role.id}
                                        className={`dropdown-item ${this.state.selectedRole === role.id ? 'active' : ''}`}
                                        onClick={() => this.handleRole(role.id)}
                                    >
                                        {role.userRole}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default RoleSelector;