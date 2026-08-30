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
import fakeassapi from './fake-ass-api.json'
import logo from '../home/img/logo.png'

function LightGalleryApp() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const [imageList, setImageList] = useState(fakeassapi.images)
    const [imageListpro, setImageListpro] = useState(imagespro.resources)
    console.log(setImageList) // Dummy line
    console.log(setImageListpro) // Dummy line

    return (
        <>  
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="../">
                        <img src={logo} className="logo" />
                    </a>
                </div>
                <div className="nav-button">
                    <a href="../wip/">
                        <h2>ABOUT</h2>
                    </a>
                </div>

                <div className="nav-button dropdown">
                        <a href="./">
                            <h2 style={{ color: "white" }}>ARTWORK</h2>
                        </a>
                        <div className="dropdown-content">
                            <a href="./othersArt/">
                                <p style={{ fontWeight: "bold", color: "aqua" }}>Others Series</p>
                            </a>
                            <a href="./fanArt/">
                                <p style={{ fontWeight: "bold", color: "aqua" }}>Fan Art</p>
                            </a>
                            <a href="./schoolWork/">
                                <p style={{ fontWeight: "bold", color: "aqua" }}>School Work</p>
                            </a>
                        </div>
                </div>

                <div className="nav-button dropdown">
                        <a href="../projects/">
                            <h2 style={{ color: "aqua" }}>PROJECTS</h2>
                        </a>
                        <div className="dropdown-content">
                            <a href="#">
                                <p style={{ fontWeight: "bold", color: "aqua" }}>Webcomics</p>
                            </a>
                            <a href="#">
                                <p style={{ fontWeight: "bold", color: "aqua" }}>Programming</p>
                            </a>
                        </div>
                </div>

                <div className="nav-button">
                    <a href="../wip/">
                        <h2>OTHER</h2>
                    </a>
                </div>
            </div>




            <div className="site-border" style={{ top: 0, zIndex: 1 }}></div>

            <h1 className='title'>
                OTHERS SERIES
            </h1>
            <a href=''>
                <h1 className='title-desc'>
                    VIEW MORE ⮞
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
                    <a href={image.url} className='image-grid'>
                        <img className='image-gal fade' src={image.url} alt={image.date} loading='lazy'></img>
                    </a>
                ))}
            </LightGallery>




            <h1 className='title'>
                SCHOOL WORK
            </h1>
            <a href=''>
                <h1 className='title-desc'>
                    VIEW MORE ⮞
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
            <p style={{ color: "aqua", textAlign: "center"}}> tony-tomass © 2016-2026 </p>
        </>
    );
}

export default LightGalleryApp;
