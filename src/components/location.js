import React, { useState } from 'react';
import Weather from './Weather';

const Location = () => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    
    const componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
}

componentDidMount();

return (
    <div>
        <Weather lat={lat} lon={lon} />
    </div>
)
}

export default Location;