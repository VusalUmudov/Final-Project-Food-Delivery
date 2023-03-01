import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import './LoginScreen.css'

function LoginScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector(state => state.loginUserReducer)
  const { loading, error } = loginstate
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }
  }, [])

  function login() {
    const user = { email, password }
    dispatch(loginUser(user))
  }

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Login Page</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <section className='login-container'>
        <div className='container'>

          {loading && (<Loading />)}
          {error && (<Error error='Invalid Credentials' />)}
          <div class="form-box">
            <div class="form-value">

              <h2>Login</h2>

              <div>
                <div class="inputbox">
                  <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} required />
                  <label for="">Email</label>
                </div>

                <div class="inputbox">
                  <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                  <label for="">Password</label>
                </div>
                <button type='sumbit' onClick={login}>Log in</button>

                <div class="register">
                  <p>Don't have an account <Link to={'/register'}>Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default LoginScreen