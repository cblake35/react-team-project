import React, { useState, useEffect } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const key = '1fda8e8934336996f687fcbc3a8d70a1';

const Weather = () => {
    const [ results, setResults ] = useState([]);
    // const [ place, setPlace ] = useState('');
    // const [ temperature, setTemperature ] = useState('');
    // const [ conds, setConds ] = useState('');
    let place;
    let temperature;
    let conds;

    let info = JSON.parse(window.localStorage.getItem('coordinates'));
    let lat = info[0][0];
    let lon = info[0][1];
    let url = `${baseURL}lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

    const getData = async() => {
        const response = await fetch(url);
        const getResult = await response.json();
        setResults(getResult);
        // place = results.name;
        // temperature = results.main.temp;
        // conds = results.weather[0].main;
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(results);
    
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">You are in {place}.</CardTitle>
                    <CardSubtitle tag='h6'>It is currently {Math.round(temperature)} degrees.</CardSubtitle>
                    <CardText>The weather is currently {conds}.</CardText>
                </CardBody>
            </Card>
            <p>This is weather.</p>
            <p>Your location is {lat} and {lon}.</p>
        </div>
    );
}

export default Weather;