import React, { useState, useEffect } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const key = '1fda8e8934336996f687fcbc3a8d70a1';

const Weather = () => {
    const [ results, setResults ] = useState([]);
    const [ name, setName ] = useState('');
    const [ temp, setTemp ] = useState('');
    const [ conds, setConds ] = useState('');
    
    let data = JSON.parse(window.localStorage.getItem('coordinates'));
    let lat = data[0][0];
    let lon = data[0][1];
    
    useEffect(() => {
        let url = `${baseURL}lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
        console.log(url);
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.log(err))
    }, [lat, lon])

    console.log(results);

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">You are in {results.name}</CardTitle>
                    <CardSubtitle tag='h6'>It is currently {Math.round(results.main.temp)} degrees.</CardSubtitle>
                    <CardText>The weather is currently {results.weather[0].main}</CardText>
                </CardBody>
            </Card>
            This is weather.
            Your location is {lat} and {lon}.
        </div>
    );
}

export default Weather;