import React from 'react'
import '../components/Navbar.css'
import github from '../assets/github.svg'
import logoIG from '../assets/logoIG.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={logoIG} alt="" />
            <a target={'_blank'} href="https://github.com/uibahy/image-generator"><img src={github} alt="" />Start on Github</a>
        </div>
    )
}

export default Navbar
