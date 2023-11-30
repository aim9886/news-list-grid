import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utilities/firebase'

const Register = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("register")
        if (email !== "" && password != "") {
            createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
                console.log(userCredentials.user)
                navigate('/login')
            }).catch((error) => {
                console.log(error.code, error.message)
            })
        }
    }
    return (
        <form className='login'>
            <h3>please register to get started</h3>
            <input type="text" placeholder='email' className='inp' value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <input type="text" placeholder='password' className='inp' value={password}
                onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <button type='button' onClick={handleRegister} className='btn'>REGISTER</button>
            <br />
            <Link to='/login'>Login</Link>
        </form>
    )
}

export default Register