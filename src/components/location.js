import React, { useState } from 'react';



// import Weather from './Weather';

// const Location = () => {
//     const [lat, setLat] = useState('');
//     const [lon, setLon] = useState('');
    
//     const componentDidMount = () => {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             setLat(position.coords.latitude);
//             setLon(position.coords.longitude);
//         });
// }

// componentDidMount();

// return (
//     <div>
//         <Weather lat={lat} lon={lon} />
//     </div>
// )
// }

// export default Location;

// export function Location() {
//     const getPosition = function () {
//         return new Promise(function (resolve, reject) {
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//     }
    
//     getPosition()
//     .then((position) => {
//         console.log(position);
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;
//         console.log(lat, lon);
//     })
//     .catch((err) => {
//         console.error(err.message);
//     }); 
// }

// const Location = React.createClass({
//     const [lat, setLat] = useState('');
//     const [lon, setLon] = useState('');
    
//     globalConfig: function() {
//         return {
//             testFunc: function () {
                
//             }
//         }
//     }
// })