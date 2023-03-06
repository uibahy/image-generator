import React from 'react'
import '../components/Footer.css'
import github from '../assets/githubf.svg'
import twitter from '../assets/twitter.svg'

function Footer() {
    return (
        <div className='footer'>
            <p>Crafted by the holy moly designer <a href="">bahy</a>, and flawlessly deployed by <a href="">Vercel</a>.</p>
            <div className="icons">
                <a href=""><img src={github} alt="" /></a>
                <div></div>
                <a href=""><img src={twitter} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer
