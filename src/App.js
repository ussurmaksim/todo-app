import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

class App extends React.Component {
  render() {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<StartPage />} />
                    <Route path="/Home" element={<HomePage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
  }
}

export default App;
