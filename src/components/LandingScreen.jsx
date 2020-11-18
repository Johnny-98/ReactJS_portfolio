import React from 'react';
import '../css/LandingScreen.css';
import '../css/App.css'
import { useMediaQuery } from 'react-responsive';
import {isSafari} from 'react-device-detect';
import GithubButton from './GithubButton';
import LandingArrow from './LandingArrow';

import landing_video from '../media/twoo_landing.webm';


const LandingScreen = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className="landing">
            {isDesktop ? (
                <p style={{width: '100%'}}>
                    {!isSafari ? (
                    <video autoPlay loop muted width={'40%'}>
                        <source src={landing_video}
                                type="video/webm"/>
                                
                        Sorry, your browser doesn't support embedded videos.
                    </video>) : (
                        //changed from video_back
                        <img src={landing_video} alt="Look at him go!" style={{width: "40%"}} />
                    )}
                </p>) : (<p>
                {!isSafari ? (
                <video autoPlay loop muted width={'90%'} style={{paddingTop: '50px'}}>
                    <source src={landing_video}
                            type="video/webm"/>
                            
                    Sorry, your browser doesn't support embedded videos.
                </video>
                ) : (
                    //changed from video_back
                    <img src={landing_video} alt="Look at him go!" style={{width: "90%", paddingTop: '50px'}} />
                )}</p>
                )
            }
            <p className="coding">
                LET YOUR IDEAS TAKE FLIGHT, <br/>
                SLEEP ALL DAY AND CODE ALL NIGHT!
            </p>

            {/*TODO:why do we only allow this for mobile??*/}
            {!isDesktop && <GithubButton place="front" />}
            <LandingArrow />
        </div>
    );
}

export default LandingScreen;