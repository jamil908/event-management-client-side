import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../slider/Slider';
import Events from '../events/Events';
import DiscountEventSlider from '../discountslider/DiscountEventSlider';
import MoreFeatures from '../morefeatures/MoreFeatures';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <Events></Events>
          <DiscountEventSlider></DiscountEventSlider>
          <MoreFeatures></MoreFeatures>
        </div>
    );
};

export default Home;