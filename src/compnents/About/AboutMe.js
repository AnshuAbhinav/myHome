import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='rootDiv'>
            <div className='contentWrapper'>
                <div className='heading'>About Myself,</div>
                <div className='detail'>I am a Front-End developer from India. I am passionate about creating UI, animation effects and creating a intuitive and dynamic user experience</div>
                <div className='detail'>Working as <span style={{color: 'orange', fontWeight: 'bold'}}>Application Development Senior Analyst</span> in <span style={{color: 'orange', fontWeight: 'bold'}}>Accenture</span> with some of the most brilliant minds to provide best solution for the clients with cutting edge technology.</div>
                <div className='detail'>Well organized, problem solver, helpful, supportive and self moivated person. Love photography, travelling and listening soft music.</div>
            </div>
            {/* <div style={{right: '5rem', position: 'relative'}}>
                <div className='bubble bubble1'>React</div>
                <div className='bubble bubble2'>JavaScript</div>
                <div className='bubble bubble3'>HTML</div>
                <div className='bubble bubble4'>CSS</div>
                <div className='bubble bubble5'>Material UI</div>
                <div className='bubble bubble6'>UNIX</div>
                <div className='bubble bubble7'>SQL</div>
                <div className='bubble bubble8'>Figma</div>
            </div> */}
        </div>
    )
}

export default AboutMe