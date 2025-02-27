import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './gallery.css'

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';

import { useState } from 'react'
import images17 from './api-mock-17.json'
import imagespro from './api-mock-pro.json'
import logo from '../home/img/logo.png'

function LightGalleryApp() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const [imageList, setImageList] = useState(images17.resources)
    const [imageListpro, setImageListpro] = useState(imagespro.resources)
    console.log(setImageList) // Dummy line
    console.log(setImageListpro) // Dummy line

    return (
        <>  
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="../home/">
                        <img src={logo} className="logo" />
                    </a>
                </div>
                <div className="nav-button">
                    <a href="../wip/">
                        <h2>ABOUT</h2>
                    </a>
                </div>
                <div className="nav-button">
                    <a href="./">
                        <h2 style={{ color: "white" }}>ARTWORK</h2>
                    </a>
                </div>
                <div className="nav-button">
                    <a href="../projects/">
                        <h2>PROJECTS</h2>
                    </a>
                </div>
                <div className="nav-button">
                    <a href="../wip/">
                        <h2>OTHER</h2>
                    </a>
                </div>
            </div>

            <div className="site-border" style={{ top: 0, zIndex: 1 }}></div>

            <h1 className='title'>
                PERSONAL WORKS
            </h1>
            <a href=''>
                <h1 className='title-desc'>
                    VIEW FULL GALLERY
                </h1>
            </a>
                    
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
                        <img className='image-gal fade' src={image.secure_url} alt="&nbsp;" loading='lazy'></img>
                    </a>
                ))}
            </LightGallery>

            <h1 className='title'>
                PROJECTS & COMMISSIONS
            </h1>
            <a href=''>
                <h1 className='title-desc'>
                    VIEW FULL GALLERY
                </h1>
            </a>

            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
                download={false}
                counter={false}
                elementClassNames={'container'}
            >   
                {imageListpro.map((imagepro) => (
                    <a href={imagepro.secure_url} className='image-grid'>
                        <img className='image-gal fade' src={imagepro.secure_url} alt="&nbsp;" loading='lazy'></img>
                    </a>
                ))}
            </LightGallery>

            <footer className="site-border" style={{ bottom: 0, paddingTop: 70}}></footer>
        </>
    );
}

export default LightGalleryApp;
