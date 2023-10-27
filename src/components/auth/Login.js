import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"
import "./HouseplantHaven.png"

export const Login = () => {
    const [email, set] = useState("saraellenbates@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        getUserByEmail(email).then((foundUsers) => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                localStorage.setItem(
                    "houseplant_user",
                    JSON.stringify({
                        id: user.id,
                    })
                )

                navigate("/")
            } else {
                window.alert("Invalid login")
            }
        })
    }

    return (
        <main className="container-login">
            <section>
                <form className="form-login" onSubmit={handleLogin}>
                    <img src="./HouseplantHaven.png" alt="" />
                    <h1>Houseplant Haven</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(evt) => set(evt.target.value)}
                                className="form-control"
                                placeholder="Email address"
                                required
                                autoFocus
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <button className="login-btn btn-info" type="submit">
                                Sign In 🪴
                            </button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <section>
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
