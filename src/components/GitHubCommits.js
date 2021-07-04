import React, { useEffect, useState} from 'react';

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
                <div className='commitWrapper'>
                    {console.log(results),
                        results.map(result => {
                            return (
                                <div className='commitCard'>
                                    <h3>{result.commit.author.name}</h3>
                                    <p className='commitMsg'>{result.commit.message}</p>
                                    <p className='commitDate'>{result.commit.author.date}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default GitHubCommits;