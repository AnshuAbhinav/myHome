import React, { useEffect, useState } from 'react';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import { Grid, Slider, Stack } from '@mui/material';
import './MyRecognition.css';
import Ace from './Awards/Ace';
import Certifications from './Awards/Certifications';
import Reviews from './Awards/Reviews';
import BestTeam from './Awards/BestTeam';
import OnTheSpot from './Awards/OnTheSpot';
import StarOfTheMonth from './Awards/StarOfTheMonth';
import MyRecognitionMobile from './MyRecognitionMobile';

const awardDetail = [
    {
        value: <Ace />,
        label: 'ACE Award',
    },
    {
        value: <Certifications />,
        label: 'Certifications',
    },
    {
        value: <Reviews />,
        label: 'Reviews',
    },
    {
        value: <BestTeam />,
        label: 'Best Team',
    },
    {
        value: <OnTheSpot />,
        label: 'On the Spot',
    },
    {
        value: <StarOfTheMonth />,
        label: 'Star of the Month',
    },
];

const awards = ['Star of the Month', 'On the Spot', 'Best Team', 'Reviews', 'Certifications', 'ACE Award',]

const Recognition = () => {

    const [award, setAward] = useState(awardDetail[awardDetail.length - 1].value);
    const [selectedLabel, setSelectedLabel] = useState(awardDetail[awardDetail.length - 1].label);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const awardHandler = (award) => {
        awardDetail.map((selectedAward) => {
            if (award === selectedAward.label) {
                setAward(selectedAward.value);
                setSelectedLabel(selectedAward.label);
            }
        })
    }

    useEffect(() => {
        window.addEventListener('resize', sizeCompare);
    },[]);

    useEffect(() => {
        window.removeEventListener('resize', sizeCompare);
    },[]);

    const sizeCompare = () => {
        console.log("called");
        setWindowWidth(window.innerWidth);
    }


    return (

        windowWidth > 768 ?

            <div className='recognitionRootDiv'>
                <div className='awardDiv'>
                    {
                        awards.map((eachAward, index) => {
                            return (
                                <div key={index} className={eachAward === selectedLabel ? 'eachAward selected' : 'eachAward'} onClick={() => awardHandler(eachAward)}>{eachAward}</div>
                            )
                        })
                    }
                </div>
                <div className='awardDetail'>
                    {award}
                </div>
            </div >
            :
            <MyRecognitionMobile awardDetail={awardDetail} />
    )
}

export default Recognition;