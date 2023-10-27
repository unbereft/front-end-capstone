import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../../services/userService"
import "./HouseplantHaven.png"

export const Register = (props) => {
    const [newUser, setNewUser] = useState({
        email: "",
        name: "",
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        createUser(newUser).then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
                localStorage.setItem(
                    "houseplant_user",
                    JSON.stringify({
                        id: createdUser.id,
                    })
                )

                navigate("/")
            }
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        getUserByEmail(newUser.email).then((response) => {
            if (response.length > 0) {
                // Duplicate email. No good.
                window.alert("Account with that email address already exists")
            } else {
                // Good email, create user.
                registerNewUser()
            }
        })
    }

    const updateUser = (evt) => {
        const copy = { ...newUser }
        copy[evt.target.id] = evt.target.value
        setNewUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form-login" onSubmit={handleRegister}>
                <h1>Houseplant Haven</h1>
                <h2>Please Register</h2>
                <fieldset>
                    <div className="form-group">
                        <input
                            onChange={updateUser}
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                            autoFocus
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <input
                            onChange={updateUser}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <button className="login-btn btn-info" type="submit">
                            Register 🪴
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>
    )
}
