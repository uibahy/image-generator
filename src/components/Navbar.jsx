import React from 'react'
import logoIg from 'assert'
import '../components/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <img src="src/assets/logoIG.svg" alt="" />
            <button><img src="src/assets/github.svg" alt="" />Start on Github</button>
        </div>
    )
}

export default Navbar
