import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { registerUser } from '../actions/userActions';
import Navbar from '../components/Navbar';
import Error from '../components/Error'
import Success from '../components/Success'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function RegisterScreen() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, success } = registerstate
    const dispatch = useDispatch();

    function register() {
        if (password !== cpassword) {
            alert('Password not matched!')
        }
        else {
            const user = {
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }

    }

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8' />
                    <title>Register Page</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <section className='login-container'>
                <div className='container'>

                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Email already registred' />)}

                    <div class="form-box">
                        <div class="form-value">


                            <h2>
                                Register
                            </h2>
                            <div>

                                <div class="inputbox">
                                    <input required type="text" placeholder="Name" value={name} onChange={(e) => { setname(e.target.value) }} />

                                    <label for="">Name</label>
                                </div>
                                <div class="inputbox">
                                    <input required type="email" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} />

                                    <label for="">Email</label>
                                </div>
                                <div class="inputbox">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        required
                                        onChange={(e) => { setpassword(e.target.value) }}
                                    />

                                    <label for="">Password</label>
                                </div>
                                <div class="inputbox">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={cpassword}
                                        required
                                        onChange={(e) => { setcpassword(e.target.value) }}
                                    />

                                    <label for="">Confirm Password</label>
                                </div>
                                <button type='sumbit' onClick={register}>REGISTER</button>
                                <div class="register">
                                    <p>Do you have an account <Link to="/login">Log in</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default RegisterScreen