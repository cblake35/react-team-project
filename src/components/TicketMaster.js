import React, {useState, useEffect} from 'react';
// import TicketMasterResults from './TicketMasterResults';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events?';
const key = 'eKo8zPdO6gxnKsmhksDmZ0d2EWLGITk2';

const TicketMaster = (props) => {
    let info = JSON.parse(window.localStorage.getItem('coordinates'));
    let lat = info[0][0];
    let lon = info[0][1];
    const latlong = lat + ',' + lon;
    console.log(latlong);
    // const [ events, setEvents] = useState('');
    // const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    useEffect(() => {
        let url = `${baseURL}&apikey=${key}&latlong=${latlong}&locale=*`;
        console.log(url);

        // fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=eKo8zPdO6gxnKsmhksDmZ0d2EWLGITk2&latlong=39.6136578,-86.1066526&locale=*')
        // fetch(url)
        fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`)
            .then((res) => res.json())
            .then((data) => setResults(data))
            .catch((err) => console.log(err))
    }, [lat,lon])

    console.log(results);

    // let events = json.results.events;
    // console.log(events);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setPageNumber(0);
    //     fetchResults();
    //     console.log(results);
    //     };

    // const changePageNumber = (event, direction) => {
    //     event.preventDefault();

    //     if(direction === 'down') {
    //         if(pageNumber > 0) {
    //             setPageNumber(pageNumber - 1);
    //             fetchResults();
    //         }
    //     }

    //     if(direction === 'up') {
    //         setPageNumber(pageNumber + 1);
    //         fetchResults();
    //     }
    // };

return(
    <div className="main">
        <div className="mainDiv">
            {/* results.map(results => {
                return ( 
                <p>TicketMasterResults results={results}</p>
                )
            }) */}
                {/* // <TicketMasterResults results={results} changePage={changePageNumber} /> */}
                {/* // <TicketMasterResults results={results} /> */}
                {/* <p>TicketMasterResults results={results._embedded.events}</p> */}

                </div>
    </div>
    );
};

export default TicketMaster;