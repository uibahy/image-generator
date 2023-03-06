import React from 'react'
import '../components/Navbar.css'
import github from '../assets/github.svg'
import logoIG from '../assets/logoIG.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={logoIG} alt="" />
            <button><img src={github} alt="" />Start on Github</button>
        </div>
    )
}

export default Navbar
