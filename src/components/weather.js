import React, {useState, useEffect} from 'react';

const baseURL = 'api.openweathermap.org/data/2.5/weather?';
const key = '1fda8e8934336996f687fcbc3a8d70a1';

const Weather = (props) => {
    const lat = props.lat
    const lon = props.lon
    const [ results, setResults ] = useState([]);

    let url = `${baseURL}lat=${lat}&lon=${lon}&appid=${key}`;
    console.log(url);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResults(data))
    }, []);
    
    console.log(results.data);

    return (
        <div>
            <p>
                {props.lat}
            </p>
            <p>
                {props.lon}
            </p>
        </div>
    )
}

export default Weather;