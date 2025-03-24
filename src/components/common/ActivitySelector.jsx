import React from 'react';
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


class ActivitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedActivities: this.props.selectedActivities,
            isOpen: false,
        };
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    handleActivityClick = (id) => {
        this.setState((prevState) => {
            const { selectedActivities } = prevState;
            let newSelectedActivities;
            if (selectedActivities.includes(id)) {
                newSelectedActivities = selectedActivities.filter(
                    (activityId) => activityId !== id
                );
            } else {
                newSelectedActivities = [...selectedActivities, id];
            }

            return { selectedActivities: newSelectedActivities };
        }, () => {
            this.props.handleActivity(this.state.selectedActivities);
        });
        this.toggleDropdown();
    };

    handleSelectedActivityClick = (id) => {
        this.setState((prevState) => {
            const newSelectedActivities = prevState.selectedActivities.filter(
                (activityId) => activityId !== id
            );
            return { selectedActivities: newSelectedActivities };
        }, () => {
            this.props.handleActivity(this.state.selectedActivities);
        });
    };

    getActivityName = (id) => {
        const { activitiesPeople } = this.props;
        const activity = activitiesPeople.find((activity) => activity.id === id);
        return activity ? activity.userActivity : '';
    };

    render() {
        const { selectedActivities, isOpen } = this.state;
        const { activitiesPeople } = this.props;

        return (
            <div className="activity-selector w-100">
                <div
                    className="selected-activities-container reg-form-input m-0"
                    onClick={this.toggleDropdown}
                >
                    <div className="activity-container">
                        {selectedActivities.length > 0 ? (
                            selectedActivities.map((id) => (
                                <div
                                    key={id}
                                    className="selected-activity"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        this.handleSelectedActivityClick(id);
                                    }}
                                >
                        {this.getActivityName(id)}
                        <MdOutlineClose className="ms-1 my-auto" />
                      </div>
                                    ))
                                ) : (
                            <span>Выберите активности</span>
                        )}
                    </div>
                    {isOpen ? (<IoIosArrowDown />) : <IoIosArrowUp />}

                </div>

                {isOpen && (
                    <div className="dropdown">
                        {activitiesPeople.map((activity) => (
                            <div
                                key={activity.id}
                                className={`dropdown-item ${
                                    selectedActivities.includes(activity.id) ? 'selected' : ''
                                }`}
                                onClick={() => {
                                    this.handleActivityClick(activity.id)
                                }}
                            >
                                {activity.userActivity}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default ActivitySelector;