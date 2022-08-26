import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './home.css';
import { Grid, Link } from '@mui/material';

const Home = () => {

    return (
        <div className='rootHome'>
            <div className='introHome'>
                <div>Hii! I am</div>
                <div className='nameDiv'>Abhinav Anshu</div>
                <div>I am a Front-End Developer and currently working as </div>
                <div className='desingation'>Application Development Software Analyst in </div>
                <div className='nameDiv companyDiv'>Accenture India (ATCI) </div>
                <div className='experience'>I have 5 years of working experience in:</div>
                <div>UNIX, SQL, Abinitio Tools, Service Now, Autosys</div>
                <div className='experience'>React, HTML, JAVASCRIPT, CSS, Material UI</div>
                <Grid container className='iconsGrid'>
                    <Grid item xs={3}>
                        <Link href='https://www.linkedin.com/in/abhinav-anshu-aa672113b/' target="_blank">
                            <LinkedInIcon sx={{ fontSize: '3rem', cursor: 'pointer', color: 'white' }} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href='https://github.com/AnshuAbhinav' target="_blank">
                            <GitHubIcon sx={{ fontSize: '3rem', cursor: 'pointer', color: 'white' }} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href='#' target="_blank">
                            <InstagramIcon sx={{ fontSize: '3rem', cursor: 'pointer', color: 'white' }} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href='https://www.youtube.com/channel/UCDw-bcN0GmGrSW8Z9dF1x1Q' target="_blank">
                            <YouTubeIcon sx={{ fontSize: '3rem', cursor: 'pointer', color: 'white' }} />
                        </Link>
                    </Grid>
                </Grid>
            </div>
            {/* <div>Image</div> */}
        </div>
    )
}

export default Home;