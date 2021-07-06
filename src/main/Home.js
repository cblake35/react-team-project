import React, {useEffect, useState} from 'react';
import Weather from '../components/Weather';

const Home = () => {

    return (
        <div className='mainDiv'>
            <div className='componentBody'>
                <Weather />
            </div>
        </div>
    )
}

export default Home;
