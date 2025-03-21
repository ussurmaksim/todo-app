import React from "react"
import {Link} from "react-router-dom";

class StartPage extends React.Component {
    render() {
        return (
           <div className="container">
               <div className="startPage d-flex flex-column align-items-center justify-content-center">
                   <h1 className="text-center">Добро пожаловать в TODO! <br /> Организуйте свои задачи и управляйте ими эффективно</h1>
                   <Link className="btn btn-light mt-3" to={"/registration"}>Начать</Link>
               </div>
           </div>
        )
    }
}

export default StartPage;