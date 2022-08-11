import React from 'react'
import './Blogsection.css'

const Blogsection = () => {
    return (
        <div className='blog-section'>
            <div className="blog-section-container">
                <div className="blog-section-content">
                    <div className="blog-section-title">
                        <div className="blog-main-title">
                            <p>Latest Adventures Tips, Tricks, Stories and Inspiration</p>
                        </div>
                        <div className="blog-subtitle">
                            <p>The world is your oyster. Check out our blog packed with stories, guides, tips, and tricks, to get inspired and create more adventure in your life.</p>
                        </div>
                    </div>
                        <div className="readmore-blog">
                            <button className='readmore-btn'>READ MORE
                            <img className='arrow2' src='https://expeditionsconnect.com/images/playOutlineIcon.svg' />

                            </button>
                        </div>
                        <br />
                </div>
            </div>
            <div className="images-container1">
                <div className="blog-image1">
                    <img className='blog-img1' src="https://expeditionsconnect.com/images/blog/blog1Latest.svg" alt="" />
                </div>
                <div className="blog-image2">
                    <img className='blog-img2' src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blogsection;