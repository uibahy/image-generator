import React from 'react'
import '../components/Footer.css'
import github from '../assets/githubf.svg'
import twitter from '../assets/twitter.svg'

function Footer() {
    return (
        <div className='footer'>
            <p>Crafted by the holy moly designer <a href="https://github.com/uibahy" target={'_blank'}>bahy</a>, and flawlessly deployed by <a href="https://vercel.com" target={'_blank'}>Vercel</a>.</p>
            <div className="icons">
                <a target={'_blank'} href="https://github.com/uibahy"><img src={github} alt="" /></a>
                <div></div>
                <a target={'_blank'} href="https://twitter.com/uibahy"><img src={twitter} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer
