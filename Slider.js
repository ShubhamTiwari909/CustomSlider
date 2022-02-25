import React, { useState } from 'react'
import Image1 from '../images/AllPhotos.png'
import Image2 from '../images/Logo.png'
import Image3 from '../images/WelcomeLogo1.png'
import { ImNext } from 'react-icons/im'
import { ImPrevious } from 'react-icons/im'
import './Slider.css';

function Slider() {
    const images = [Image1, Image2, Image3];
    const [imageSrc, setImageSrc] = useState(0);
    const [animate, setAnimate] = useState("");

    const animation = () => {
        setAnimate("animate-ping")
        setTimeout(() => {
            setAnimate("")
        }, 1000);
    }

    const nextImage = () => {
        if (imageSrc < images.length - 1) {
            setImageSrc(imageSrc + 1)
            animation()
        }
        else {
            setImageSrc(0)
            animation()
        }
    }

    const prevImage = () => {
        if (imageSrc > 0) {
            setImageSrc(imageSrc - 1)
            animation()
        }
        else {
            setImageSrc(images.length - 1)
            animation()
        }
    }
    return (
        <div>
            <div className='grid grid-cols-3 place-items-center py-5 bg-slate-800 containers'>
                <div className='my-10'>
                    <button onClick={prevImage} className="slideButton"><ImPrevious color='white' /></button>
                </div>
                <div className='place-self-center'>
                    <img src={images[imageSrc]} width="500px" height='500p' alt="slide images" className={animate} />
                </div>
                <div className='my-10 place-self-center'>
                    <button onClick={nextImage} className="slideButton"><ImNext color='white' /></button>
                </div>
            </div>
        </div>

    )
}

export default Slider