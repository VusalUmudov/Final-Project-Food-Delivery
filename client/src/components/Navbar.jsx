import React from 'react'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';
import logo from '../images/logo.png'
import './navbar.css'
function Navbar() {
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    const dispatch = useDispatch()
    return (
        <div className='nav-container'>

            <div className='container'>
                <nav className="nav-div">
                    <Link to="/" className='nav-logo'><img src={logo} /></Link>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">More...</span>
                </button> */}
                    <div className="nav-right">
                        <ul>

                            {currentUser ? (
                                <div className="dropdown">
                                    <Link className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currentUser.name}
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="/orders">Orders</Link>
                                        <Link className="dropdown-item" to="#" onClick={() => { dispatch(logoutUser()) }}>Logout</Link>
                                    </div>
                                </div>
                            ) : (
                                <li>
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            )}


                            <li >
                                <Link to="/cart" className="nav-link">Cart <sup>{cartState.cartItems.length}</sup></Link>
                            </li>
                        </ul>
                    </div>
                    <Toaster position="top-center" reverseOrder={false} />
                </nav>
            </div>
        </div>
    )
}

export default Navbar