import useGeolocation from 'react-use-geolocation';
import React, { useState } from 'react';

const Location = () => {
    const [position, error] = useGeolocation();
    const [zipcode, newZipcode] = useState('');
    let myLatitude;
    let myLongitude;

    
    myLatitude = position.latitude;
    myLongitude = position.longitude;

    const newZipcode = require('latlng-to-zip');
    newZipcode({myLatitude, myLongitude}, key)
    .then(zipcode => zipcode)
    .catch(err => err);

    return (
        <div>
            <p>Zip code: {{zipcode}}</p>
        </div>
    );
}

export default Location;