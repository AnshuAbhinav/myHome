import React, { useState } from 'react';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ReviewsIcon from '@mui/icons-material/Reviews';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import './MyRecognitionMobile.css';

const MyRecognitionMobile = (props) => {

    const [selected, setSelected] = useState(props.awardDetail[props.awardDetail.length -1].value)
    const [selectedLabel, setSelectedLabel] = useState(props.awardDetail[props.awardDetail.length -1].label)

    const awardHandler = (award) => {
        props.awardDetail.map((selectedAward) => {
            if (selectedAward.label === award) {
                setSelected(selectedAward.value);
                setSelectedLabel(selectedAward.label)
            }
        })
    }

    return (
        <div className='recognitionMobileRoot'>
            <div className='iconWrapperMobile'>
                <StarPurple500Icon style={{color: selectedLabel === 'Star of the Month' ? 'orange' : 'white', borderBottom: selectedLabel === 'Star of the Month' ? '3px solid #3EB489' : ''}} className='icons' id='Star of the Month' onClick={() => awardHandler('Star of the Month')} />
                <RadioButtonCheckedIcon style={{color: selectedLabel === 'On the Spot' ? 'orange' : 'white', borderBottom: selectedLabel === 'On the Spot' ? '3px solid #3EB489' : ''}} className='icons' id='On the Spot' onClick={() => awardHandler('On the Spot')} />
                <WorkspacesIcon style={{color: selectedLabel === 'Best Team' ? 'orange' : 'white', borderBottom: selectedLabel === 'Best Team' ? '3px solid #3EB489' : ''}} className='icons' id='Best Team' onClick={() => awardHandler('Best Team')} />
                <ReviewsIcon style={{color: selectedLabel === 'Reviews' ? 'orange' : 'white', borderBottom: selectedLabel === 'Reviews' ? '3px solid #3EB489' : ''}} className='icons' id='Reviews' onClick={() => awardHandler('Reviews')} />
                <WorkspacePremiumIcon style={{color: selectedLabel === 'Certifications' ? 'orange' : 'white', borderBottom: selectedLabel === 'Certifications' ? '3px solid #3EB489' : ''}} className='icons' id='Certifications' onClick={() => awardHandler('Certifications')} />
                <MilitaryTechIcon style={{color: selectedLabel === 'ACE Award' ? 'orange' : 'white', borderBottom: selectedLabel === 'ACE Award' ? '3px solid #3EB489' : ''}} className='icons' id='ACE Award' onClick={() => awardHandler('ACE Award')} />
            </div>
            <div className='recognitionMobileDetails'>{selected}</div>
        </div>
    )
}

export default MyRecognitionMobile;