import React from 'react';
import "./Home.css";

const slideImages = [
    {
        id: 1,
        image: 'public\assets\img1.jpg'
    },
    {
        id: 2,
        image: 'public\assets\img2.jpg'
    },
    {
        id: 3,
        image: 'public\assets\img3.jpg'
    },
    {
        id: 4,
        image: 'public\assets\img4.jpg'
    },
    {
        id: 5,
        image: 'public\assets\img5.jpg'
    },
    {
        id: 6,
        image: 'public\assets\img6.jpg'
    }
]

function Home() {
  return (
    <div className='home px-2'>
        <div className="home-container">
            <img src="/assets/img1.jpg" alt="" className='home-image  w-full'/>
        </div>
    </div>
  )
}

export default Home