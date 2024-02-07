import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userData } from '../App'
import { signOut } from 'firebase/auth'
import { auth } from '../utilities/firebase'

const Navbar = ({ setUid }) => {
    let { uid } = useContext(userData)

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("successfully logged out")
            // navigate('/')
            setUid("")
        }).catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <nav className='navbar'>
            <ul>
                <li><NavLink to='/'>news</NavLink></li>
                {
                    !uid ? <>
                        <li><NavLink to='/wishlist'>wishlist</NavLink></li>
                        <li><NavLink to='/login'>login</NavLink></li>
                        <li><NavLink to='/register'>register</NavLink></li>
                        
                    </> : <>
                        
                        <li onClick={handleLogout}><NavLink >logout</NavLink></li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default Navbar


// paste that wishlist NavLink above logout NavLink