import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './assets/css/gallery.css'

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';

import { useState } from 'react'
import images from './assets/json/api-mock.json'

function LightGalleryApp() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const [imageList, setImageList] = useState(images.resources)
    
    console.log(setImageList) // Dummy line

    return (
        <>  
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
                download={false}
                counter={false}
                elementClassNames={'container-1'}
            >   
                {imageList.map((image) => (
                    <a href={image.secure_url} className='image-grid'>
                        <img className='image-gal fade' src={image.secure_url} alt=" " loading='lazy'></img>
                    </a>
                ))}
            </LightGallery>
        </>
    );
}

export default LightGalleryApp;
