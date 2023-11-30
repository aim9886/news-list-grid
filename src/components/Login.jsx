import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utilities/firebase'

import './Login.css';

const Login = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("login")
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
                let user = userCredentials.user;
                console.log(user)
                navigate('/')
            }).catch((error) => {
                console.log(error.code, error.message)
                navigate('/login')
            })
        }
    }

    return (
        <form className='login'>
            <h3>login </h3>

            <input type="text" placeholder='email' className='inp' value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <input type="text" placeholder='password' className='inp' value={password}
                onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <button type='button' onClick={handleLogin} className='btn'>LOGIN</button>
            <br />
            <Link to='/register'>Register</Link>
        </form>
    )
}

export default Login

{/* <button className='google-btn'><FaGoogle /><span>Sign-in using Google</span></button> */ }