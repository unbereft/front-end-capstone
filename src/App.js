import { Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Authorized } from "./components/views/Authorized"
import { ApplicationViews } from "./components/views/ApplicationViews"


export const App = () => {
    return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="*"
                    element={
                        // Check if user is authorized first
                        <Authorized>
                            <ApplicationViews />
                        </Authorized>
                    }
                />
            </Routes>
    )
}