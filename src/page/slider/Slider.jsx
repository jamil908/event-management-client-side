import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../assets/corporate-events.jpg';
import img2 from '../../assets/event.jpg';
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
            <div>
                <img src={img1} alt="Corporate Event" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img2} alt="Event 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img3} alt="Event 3" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={img4} alt="Event 4" />
                <p className="legend">Legend 4</p>
            </div>
        </Carousel>
    );
};

export default Slider;
