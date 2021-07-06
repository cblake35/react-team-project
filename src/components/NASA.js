import React from 'react';
import { Card, CardImg } from 'reactstrap';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'wklLsmFXRdX9oznv1ySgHE6LXELebXGRSlvj5qul';

const NASA = () =>{
    let info = JSON.parse(window.localStorage.getItem('coordinates'));
    let lat = info[0][0];
    let lon = info[0][1];
    
    let url = `${baseURL}?lon=${lon}&lat=${lat}&dim=0.15&api-key=${key}`;
    console.log(url);

return(
    <div>
        <Card>
            <CardImg top width="500px" src={url} alt='NASA Image' />
        </Card>
    </div>
);
}

export default NASA;