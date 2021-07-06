import React, {useEffect, useState} from 'react';
import Weather from '../components/weather';
import GitHubCommits from '../components/GitHubCommits';
import NASA from '../components/NASA';
import TicketMaster from '../components/TicketMaster';

const Home = () => {

    return (
        <div className='mainDiv'>
            <div className='componentBody'>
                <NASA />
                <Weather />
                <TicketMaster />
                <GitHubCommits />
            </div>
        </div>
    )
}

export default Home;
