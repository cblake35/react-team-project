import React, {useState, useEffect} from 'react';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const key = '1fda8e8934336996f687fcbc3a8d70a1';

const Weather = (props) => {
    const lat =  props.lat;
    const lon = props.lon;
    const [ results, setResults ] = useState([]);
        
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
            <div>
            { results ? 
            <p> In {results.name}, it is {results.main.temp} degrees and {results.weather[0].main}.</p>
            : null }
            </div>    
        </div>
    )
}

export default Weather;