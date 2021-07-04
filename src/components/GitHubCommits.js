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
        fetch(`https://api.github.com/repos/cblake35/react-team-project/commits?sha=development&page=${pageNumber}&per_page=2`)
            .then((res) => res.json())
            .then((data) => setResults(data))
    }, [pageNumber])


    const fetchPrevious = () => {
        if (counter === 1) {
            return;
        } else {
            setPageNumber(counter - 1)
            fetch(`https://api.github.com/repos/cblake35/react-team-project/commits?sha=development&page=${pageNumber}&per_page=2`)
                .then((res) => res.json())
                .then((data) => setResults(data))
        }
    }


    const fetchNext = () => {
        if (counter > results.length) {
            return;
        } else {
            setPageNumber(counter + 1)
            fetch(`https://api.github.com/repos/cblake35/react-team-project/commits?sha=development&page=${pageNumber}&per_page=2`)
                .then((res) => res.json())
                .then((data) => setResults(data))
        }
    }

    return (
        <div className='mainDiv'>
            <div className='componentBody'>
                <h1 className='commitHeading'>Commits</h1>
                <Row className='commitWrapper'>
                    {console.log(results),
                        results.map(result => {
                            return (
                                <Col xs='6' md='4' lg='2' className='commitCard'>
                                    <h3>{result.commit.author.name}</h3>
                                    <p className='commitMsg'>{result.commit.message}</p>
                                    <p className='commitDate'>{result.commit.author.date}</p>
                                </Col>
                            )
                        })}
                </Row>
            </div>
            {results.length >= 2
                ? <div className='buttonContainer'>
                    <Button onClick={fetchPrevious}>Previous</Button>
                    <Button onClick={fetchNext}>Next</Button>
                </div>
                : undefined
            }

        </div>
    )
}

export default GitHubCommits;