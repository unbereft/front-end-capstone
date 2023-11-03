import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import "../styles/NavBar.css"
import logo from "./logo.jpg"


export const NavBar = () => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHouseplantUser = localStorage.getItem("houseplant_user")
        const houseplantUserObject = JSON.parse(localHouseplantUser)
        setCurrentUser(houseplantUserObject)
    }, [])

    return (
        <ul className="navbar">
            <div className="navbar-item">
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </div>
            <div className="navbar-item">
                <Link to="/plants">
                    <button>All Plants</button>
                </Link>
            </div>
            <div className="navbar-item">
                        <Link to={`/wishlist/${currentUser?.id}`}>
                            <button>Wishlist</button>
                        </Link>
            </div>
            <div className="navbar-item">
                <Link to="/plants/add">
                    <button>Add Plant</button>
                </Link>
            </div>
            {localStorage.getItem("houseplant_user") ? (
                <>
                    <div className="navbar-item">
                        <button onClick={() => {
                            localStorage.removeItem("houseplant_user");
                            navigate("/login", { replace: true });
                        }}>
                            Logout
                        </button>
                    </div>
                        <div className='navbar-item'>
                            <img className="navbar-logo" src={logo} alt="Houseplant Haven Logo" />
                        </div>
                </>
            ) : (
                ""
            )}
        </ul>
    );

}