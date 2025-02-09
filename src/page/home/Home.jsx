import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../slider/Slider';
import Events from '../events/Events';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <Events></Events>
        </div>
    );
};

export default Home;