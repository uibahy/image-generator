import React from 'react'
import '../components/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>Crafted by the holy moly designer <a href="">bahy</a>, and flawlessly deployed by <a href="">Vercel</a>.</p>
            <div className="icons">
                <a href=""><img src="src/assets/githubf.svg" alt="" /></a>
                <div></div>
                <a href=""><img src="src/assets/twitter.svg" alt="" /></a>
            </div>
        </div>
    )
}

export default Footer
