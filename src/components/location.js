import { useCurrentPosition } from 'react-use-geolocation';
import React, { useState, useEffect,  } from 'react';

const Location = () => {
    const [position, error] = useCurrentPosition();
    const [zipcode, newZipcode] = useState('');
    let myLatitude;
    let myLongitude;

    if (!position && !error) {
        return <p>Waiting</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    myLatitude = {position.coords.latitude};
    myLongitude = {position.coords.longitude};

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