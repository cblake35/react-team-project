import React from 'react';
import App from '../../../react-team-project/src/App';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'wklLsmFXRdX9oznv1ySgHE6LXELebXGRSlvj5qul';

const NASA = (props) =>{

    let info = JSON.parse(window.localStorage.getItem('coordinates'));
    let lat = info[0][0];
    let lon = info[0][1];
    let url = `${baseURL}?lon=${lon}&lat=${lat}&dim=0.15&api_key=${key}`;
        console.log(url);
    return(
        <div>
            <div className="main">
                <Card>
                <img src={url} alt='Satellite pic' width="350px" height="350px"/> 
                <CardBody>
                    <CardTitle>NASA Satellite Image</CardTitle>
                    <CardSubtitle>Based on current location</CardSubtitle>
                    <CardText><dd>Most recent LANDSAT image for these coordinates</dd></CardText>
                </CardBody>
            </Card>
        </div>
        </div>
    );

                };

export default NASA;