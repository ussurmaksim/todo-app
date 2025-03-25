import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import PrivateRoute from "./routes/PrivateRoute";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkTheme: true,
        }
    }
    componentDidMount() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            this.setState({ isDarkTheme: false });
            document.body.classList.add("light");
        }
    }
  render() {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<StartPage />} />
                    <Route path="/Home" element={<HomePage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/tasks"
                           element={<PrivateRoute element={TasksPage} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
  }
}

export default App;
