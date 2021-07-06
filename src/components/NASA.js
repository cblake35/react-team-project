import React, {useState, useEffect} from 'react';
import App from '../../../react-team-project/src/App';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'wklLsmFXRdX9oznv1ySgHE6LXELebXGRSlvj5qul';

const NASA = (props) =>{
    // const lat =  props.lat;
    // const lon = props.lon;
    // const [ results, setResults ] = useState([]);
    // const [ search, setSearch ] = useState('');
    // const [ date, setDate ] = useState('');
    // const [ position, setPosition] = useState('');
    
    let info = JSON.parse(window.localStorage.getItem('coordinates'));
    let lat = info[0][0];
    let lon = info[0][1];

    // useEffect(() => {
    // const fetchResults = () => {        
        let url = `${baseURL}?lon=${lon}&lat=${lat}&dim=0.15&api-key=${key}`;
        // url = date ? url + `&current_date=${date}` : url;
        console.log(url);
//     fetch(url)
//     .then(res => res.json())
//     .then(data => setResults(data))
//     .catch(err => console.log(err));
// }, [lat, lon]);

// console.log(results)

// const handleSubmit = (event) => {
//     event.preventDefault();
    // fetchResults();
    // console.log(results)
// }

    return(
        <div>
            <div className="main">
            {/* {results ? 
                <span> Today, here is a satellite image at your location at or near {results.name}.</span>
                    : null } */}
                    


                    <Card>
                        {/* <CardImg> */}
                            
                <img src={url} alt='card cap' />
                {/* <img src='https://api.nasa.gov/planetary/earth/imagery?lon=-87.43&lat=41.52&dim=0.15&api_key=wklLsmFXRdX9oznv1ySgHE6LXELebXGRSlvj5qul
' alt='card cap' />  */}
<CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function()</pre></CardText>
                </CardBody>
                        {/* </CardImg> */}
            </Card>





        </div>
        </div>
    );

                };

export default NASA;