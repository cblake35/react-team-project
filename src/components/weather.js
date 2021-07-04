import React, {useState, useEffect} from 'react';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const key = '1fda8e8934336996f687fcbc3a8d70a1';

const Weather = (props) => {
    const lat =  props.lat;
    const lon = props.lon;
    const [ results, setResults ] = useState([]);
    const [ name, setName ] = useState('Please wait');
    const [ temp, setTemp ] = useState('');
    const [ weather, setWeather] = useState('');

    useEffect(() => {
        let url = `${baseURL}lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
        console.log(url);
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.log(err))
    }, [])

    console.log(results)
    setName(results.name);
    setTemp(results.main.temp);
    setWeather(results.weather.main);
    
    return (
        <div>
            <p>
                {props.lat}
            </p>
            <p>
                {props.lon}
            </p>
            <p>
                {name}
            </p>
            <p>
                {temp}
            </p>
            <p>
                {weather}
            </p>
        </div>
    )
}

export default Weather;