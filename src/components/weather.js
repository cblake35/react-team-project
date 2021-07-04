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
    }, []);
    
    console.log(results);


    return (
        <div>
            <p>
                You are in {results.name}.
            </p>
            {/* <p>
                It is currently {results.main.temp} degrees, and feels like {results.main.feels_like}.
            </p>
            <p>
                The weather is {results.weather.main}. 
            </p> */}
        </div>
    )
}

export default Weather;