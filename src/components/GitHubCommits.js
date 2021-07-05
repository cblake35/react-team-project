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
        fetch(`https://api.github.com/repos/cblake35/react-team-project/commits?sha=development&page=${pageNumber}&per_page=9`)
            .then((res) => res.json())
            .then((data) => setResults(data))
    }, [pageNumber])


    const fetchPrevious = () => {
        if (counter === 1) {
            return;
        } else {
            setPageNumber(counter - 1)
            fetch(`https://api.github.com/repos/cblake35/react-team-project/commits?sha=development&page=${pageNumber}&per_page=9`)
                .then((res) => res.json())
                .then((data) => setResults(data))
        }
    }

    const fetchNext = () => {
        if (counter >= results.length) {
            return;
        } else {
            setPageNumber(counter + 1)
            fetch(`https://api.github.com/repos/cblake35/react-team-project/commits?sha=development&page=${pageNumber}&per_page=9`)
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
                            let myDate = new Date(result.commit.author.date).toLocaleString('en-US', { timezone: 'America/New_York' }).split(',').shift();
                            return (
                                <Col xs='6' md='4' lg='2' className='commitCard'>
                                    <h3>{result.commit.author.name}</h3>
                                    <p className='commitMsg'>{result.commit.message}</p>
                                    <p className='commitDate'>{myDate}</p>
                                </Col>
                            )
                        })}
                </Row>
                {counter >= 1
                    ? <Row className='buttonContainer'>
                        <Col>
                            <Button onClick={fetchPrevious}>Previous</Button>
                            <Button onClick={fetchNext}>Next</Button>
                        </Col>
                    </Row>
                    : undefined
                }
            </div>


        </div>
    )
}

export default GitHubCommits;