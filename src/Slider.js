import React, { useEffect, useState } from "react";
import './Home.css';
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

const slideImage = [
  "/assets/img1.jpg",
  "/assets/img2.jpg",
  "/assets/img3.jpg",
  "/assets/img4.jpg",
  "/assets/img5.jpg",
  "/assets/img6.jpg",
];

let count = 0;
function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
      automaticSlider();
    }, [])
    
    const automaticSlider = () => {
      setInterval(() => {
        handleOnNextClick();
      },3000)
    };

    const handleOnNextClick = () => {
      count = (count + 1) % slideImage.length;
      setCurrentImageIndex(count);
    }
    const handleOnPreviousClick = () => {
      const storelength = slideImage.length;
      count = (currentImageIndex + storelength - 1) % storelength;
      setCurrentImageIndex(count);
    }
  return (
    <div className="slider w-full relative">
        <img src={slideImage[currentImageIndex]} alt="" className='home-image w-full'/>

        <div className="arrows absolute w-full h-10 flex justify-between items-center top-10 sm:top-16 lg:top-28 px-3">
            <button onClick={handleOnPreviousClick}><ArrowBackIosTwoToneIcon sx={{ fontSize: 38 }} className="text-white"/></button>
            <button onClick={handleOnNextClick}><ArrowForwardIosTwoToneIcon sx={{ fontSize: 38 }} className="text-white"/></button>
        </div>
    </div>
  )
}

export default Slider;
