import React, { useState } from 'react';
import TicketMaster from './TicketMaster';

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
        <TicketMaster lat={lat} lon={lon} />
    </div>
)
}

export default Location;