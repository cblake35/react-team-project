import React, { useEffect, useState } from 'react';

const GitHubCommits = (props) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const displayData = (commitData) => {
        for (let i = 0; i < commitData.length; i++) {
            console.log(commitData[i].commit.author.name)
            console.log(commitData[i].commit.author.date)
            console.log(commitData[i].commit.message)
        }
    }

    useEffect(() => {
        fetch('https://api.github.com/repos/cblake35/react-team-project/commits')
            .then((res) => res.json())
            .then((data) => displayData(data))
    }, [])



    return (
        <div className='mainDiv'>
            <div className='componentBody'>
                <h1 className='commitHeading'>Commits</h1>
                <div>
                    <h3>Name</h3>
                    <div>
                        <p>Message</p>
                        <p>Date</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GitHubCommits;