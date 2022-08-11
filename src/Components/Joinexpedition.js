import React from 'react'
import './Joinexpedition.css'

const Joinexpedition = () => {
    return (
        <div className='join-expedition'>
            <img className='join-exp-image' src="https://expeditionsconnect.com/images/home/joinTheExpeditionBackground.svg" alt="" />
            <div className="join-expedition-content">
                <p className='join-exp-title'>Join The Expedition</p>
                <div className="our-aim">
                    <div className="our-aim-images">
                        <img className='flashlight' src="https://expeditionsconnect.com/images/home/joinTheExpedition_flashlight.svg" alt="" />
                        <img className='hummer' src="https://expeditionsconnect.com/images/home/joinTheExpedition_Hummer.svg" alt="" />
                    </div>
                    <p className='our-aim-text'>
                        <img className='compass-img' src="https://expeditionsconnect.com/images/home/joinTheExpedition_compas.svg" alt="" />
                        <img className='quote-open' src="https://expeditionsconnect.com/images/home/quoteOpenIcon.svg" alt="" />
                        <img className='quote-close' src="https://expeditionsconnect.com/images/home/quoteCloseIcon.svg" alt="" />
                        <b>Our aim</b> is to connect enthusiasts with expert adventurers.
                        <br />
                        <br />
                        We are on a mission to create a sustainable future for our planet by creating a community of like-minded, passionate explorers - a place where those seeking their wanderlust can learn from experienced professionals.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Joinexpedition