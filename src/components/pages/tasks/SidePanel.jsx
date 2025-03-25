import React from "react"
import SidePanelButton from "./SidePanelButton";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";



class SidePanel extends React.Component {
    render() {
        return (
            <div className="side-panel-menu">
                <div className="side-panel-menu-user">
                    <FiUser />
                    <p className="user-name">Kotewa</p>
                    {/*<img className="dropdown-arrow" />*/}
                    <IoIosArrowDown />
                    <IoIosArrowUp />
                    {/*<img className="hide-menu" />*/}
                    <CiBoxList />
                </div>

                <div className="side-panel-menu-buttons">

                    <SidePanelButton />
                    <SidePanelButton />
                    <SidePanelButton />
                    <SidePanelButton />

                </div>
            </div>
        )
    }
}

export default SidePanel;