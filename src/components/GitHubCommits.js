import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';

const GitHubCommits = () => {
    const [results, setResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    let counter = pageNumber;

    useEffect(() => {
        fetch(`https://api.github.com/networks/cblake35/react-team-project/events?page=${pageNumber}&per_page=20`)
            .then((res) => res.json())
            .then((data) => setResults(data))
    }, [pageNumber])


    const fetchPrevious = () => {
        if (counter === 1) {
            return;
        } else {
            setPageNumber(counter - 1)
            fetch(`https://api.github.com/networks/cblake35/react-team-project/events?page=${pageNumber}&per_page=20`)
                .then((res) => res.json())
                .then((data) => setResults(data))
        }
    }

    const fetchNext = () => {
        if (results.length < 20) {
            return;
        } else {
            setPageNumber(counter + 1)
            fetch(`https://api.github.com/networks/cblake35/react-team-project/events?page=${pageNumber}&per_page=20`)
                .then((res) => res.json())
                .then((data) => setResults(data))
        }
    }


    return (
        <div className='mainDiv'>
            <div className='componentBody'>
                <h1 className='commitHeading'>COMMITS</h1>
                <Row className='commitWrapper'>
                    {console.log(results),
                        results.map(result => {
                            let myDate = new Date(result.created_at).toLocaleString('en-US', { timezone: 'America/New_York' }).split(',').shift();
                            return (
                                result.type === 'PushEvent' && result.payload.size === 1 ?

                                    <Col xs='6' md='4' lg='2' className='commitCard'>
                                        <h3>{result.payload.commits[result.payload.commits.length - 1].author.name}</h3>
                                        <p className='commitMsg'>{result.payload.commits[result.payload.commits.length - 1].message}</p>
                                        <p className='commitDate'>{myDate}</p>

                                    </Col>

                                    : result.type === 'PushEvent' && result.payload.size > 1 ?

                                        <Col xs='6' md='4' lg='2' className='commitCard'>
                                            <h3>{result.payload.commits[result.payload.commits.length - 1].author.name}</h3>
                                            <p className='commitMsg'>{result.payload.commits[result.payload.commits.length - 1].message}</p>
                                            <p className='commitDate'>{myDate}</p>
                                        </Col>

                                        : undefined
                            )
                        })}
                </Row>

                <Row className='buttonContainer'>
                    <Col>
                        <Button onClick={fetchPrevious}>Previous</Button>
                        <Button onClick={fetchNext}>Next</Button>
                    </Col>
                </Row>

            </div>


        </div>
    )
}

export default GitHubCommits;