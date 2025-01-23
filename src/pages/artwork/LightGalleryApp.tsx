import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './gallery.css'

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';

import { useState } from 'react'
import images from './api-mock.json'
import logo from '../home/img/logo.png'

function LightGalleryApp() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const [imageList, setImageList] = useState(images.resources)
    
    console.log(setImageList) // Dummy line

    return (
        <>  
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="../home/index.html">
                        <img src={logo} className="logo" />
                    </a>
                </div>
                <div className="nav-button">
                    <a href="wip.html">
                        <h2>ABOUT</h2>
                    </a>
                </div>
                <div className="nav-button">
                    <a href="index.html">
                        <h2 style={{ color: "white" }}>ARTWORK</h2>
                    </a>
                </div>
                <div className="nav-button">
                    <a href="wip.html">
                        <h2>PROJECTS</h2>
                    </a>
                </div>
                <div className="nav-button">
                    <a href="wip.html">
                        <h2>OTHER</h2>
                    </a>
                </div>
            </div>

            <div className="site-border" style={{ top: 0, zIndex: 1 }}></div>

            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
                download={false}
                counter={false}
                elementClassNames={'container'}
            >   
                {imageList.map((image) => (
                    <a href={image.secure_url} className='image-grid'>
                        <img className='image-gal fade' src={image.secure_url} alt="" loading='lazy'></img>
                    </a>
                ))}
            </LightGallery>

            <footer className="site-border" style={{ bottom: 0 }}></footer>
        </>
    );
}

export default LightGalleryApp;
