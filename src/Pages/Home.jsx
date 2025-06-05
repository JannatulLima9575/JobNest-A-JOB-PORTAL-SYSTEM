import React, { Suspense } from 'react';
import Banner from './Banner';
import Category from './Category';
import Status from './Status';
import HotJobs from './HotJobs';
import Hiring from './Hiring';
import HowItWorks from './HowItWorks';
import CreateProfile from './CreateProfile';
import SubscribeSection from '../Components/SubscribeSection';
import Find from './Home/Find';


const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());

    return (
        <div>
            <Banner/>
            <Category/>
            <Hiring/>
            <Suspense fallback={'Loading hot jobs....'}>
                <HotJobs jobsPromise={jobsPromise}/>
            </Suspense>
            <Find/>
            <Status/>
            <CreateProfile/>
            <HowItWorks/>
            <SubscribeSection/>
        </div>
    );
};

export default Home;