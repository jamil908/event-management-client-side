import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../assets/corporate-events.jpg';
import img2 from '../../assets/event.webp';
import img3 from '../../assets/event2.jpg';
import img4 from '../../assets/event3.jpg';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel 
            animationHandler="fade" // fade animation enable
            swipeable={false} // swipe disable for smooth fading
            autoPlay // auto sliding enable
            infiniteLoop // loop enable
            interval={3000} // time interval between slides (optional)
            showThumbs={false} // hide thumbnails
        >
            <div className="relative">
                <img src={img1} alt="Corporate Event" />
                <div className="absolute bottom-10 left-10 text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-md">
                    Corporate Event Management
                </div>
            </div>
            <div className="relative">
                <img src={img2} alt="Event 2" />
                <div className="absolute bottom-10 left-10 text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-md">
                    Successful Conferences
                </div>
            </div>
            <div className="relative">
                <img src={img3} alt="Event 3" />
                <div className="absolute bottom-10 left-10 text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-md">
                    Unforgettable Experiences
                </div>
            </div>
            <div className="relative">
                <img src={img4} alt="Event 4" />
                <div className="absolute bottom-10 left-10 text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-md">
                    Tailored Event Solutions
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;
