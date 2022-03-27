import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./components/pages/login"
import Signup from "./components/pages/signup"
import Home from "./components/pages/home"
import Dashboard from "./components/pages/dashboard"
import Mode from "./components/pages/mode"
import User from "./components/pages/user"

export default function app() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<Login/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="mode" element={<Mode/>}/>
                    <Route path="user" element={<User/>}/>
                </Routes>
            </Router>
        </div>
    )
}
