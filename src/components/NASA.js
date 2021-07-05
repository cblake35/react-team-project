import React, {useState, useEffect} from 'react';
import Location from '../../../src/Practice';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'wklLsmFXRdX9oznv1ySgHE6LXELebXGRSlvj5qul';

const NASA = (props) =>{
    const lat =  props.lat;
    const lon = props.lon;
    const [ results, setResults ] = useState([]);
    // const [ search, setSearch ] = useState('');
    // const [ date, setDate ] = useState('');
    // const [ position, setPosition] = useState('');
    
    useEffect(() => {
    // const fetchResults = () => {        
        let url = `${baseURL}?lat=${lat}&lon=${lon}&api-key=${key}`;
        // url = date ? url + `&current_date=${date}` : url;
        console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.log(err));
}, [lat, lon]);

console.log(results)

// const handleSubmit = (event) => {
//     event.preventDefault();
    // fetchResults();
    // console.log(results)
// }

    return(
        <div>
            <div className="main">
            {results ? 
                <span> Today, here is a satellite image at your location at or near {results.name}.</span>
                    : null }
        </div>
        </div>
    );


};

export default NASA;