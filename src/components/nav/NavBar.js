import { Link, useNavigate } from 'react-router-dom'
import "./NavBar.css"
export const NavBar = () => {
    const navigate = useNavigate()

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
            {/* <div className="navbar-item">
                        <Link to="/wishlist/:userId">
                            <button>Wishlist</button>
                        </Link>
            </div> */}
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
                </>
            ) : (
                ""
            )}
        </ul>
    );
    
}