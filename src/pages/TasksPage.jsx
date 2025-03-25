import React from "react"
import SidePanel from "../components/pages/tasks/SidePanel";
import MainPanel from "../components/pages/tasks/MainPanel";

class TasksPage extends React.Component {
    render() {
        return (
            <div className="tasks-page">
                <SidePanel />
                <MainPanel />
            </div>
        )
    }
}

export default TasksPage;