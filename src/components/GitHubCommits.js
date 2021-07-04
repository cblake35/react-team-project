import React, { useEffect, useState} from 'react';
import {
    Container,
    Row,
    Col 
} from 'reactstrap';

const GitHubCommits = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/repos/cblake35/react-team-project/commits?sha=Chris')
            .then((res) => res.json())
            .then((data) => setResults(data))
    }, [])

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
        </div>
    )
}

export default GitHubCommits;