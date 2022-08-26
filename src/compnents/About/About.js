import { Grid } from "@mui/material";
import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="rootDiv">
                {/* <Grid container spacing={2}>
                    <Grid item xs={2} style={{ textAlign: 'center' }}> */}
                <div className="divHeader">
                    <WorkIcon style={{ color: '#3EB489' }} />
                    Profession
                </div>
                {/* </Grid>
                    <Grid item xs={4}> */}
                <div className="eachDiv">
                    <div className="stream">Current</div>
                    <div className="details">
                        <div>Working as Application Development Senior Analyst in Accenture</div>
                        <div>Technologies working on: React, JavaScript, HTML, CSS, Material UI</div>
                    </div>
                </div>
                {/* </Grid>
                    <Grid item xs={4}> */}
                <div className="eachDiv">
                    <div className="stream">Previous</div>
                    <div className="details">
                        <div>Worked as System Engineer in TCS</div>
                        <div>Technologies working on: UNIX, SQL, Abinitio</div>
                        <div>Tools: Service Now, Autosys, Abinitio Control Center</div>
                    </div>
                </div>
                {/* </Grid>
                </Grid> */}

                {/* <Grid container spacing={2}>
                    <Grid item xs={2}> */}
                <div className="divHeader">
                    <SchoolIcon style={{ color: '#3EB489' }} />
                    Education
                </div>
                {/* </Grid>

                    <Grid item xs={4}> */}
                <div className="eachDiv">
                    <div className="stream">Masters</div>
                    <div className="details">
                        <div>Sastra University, Chennai (Tamil Nadu)</div>
                        <div>Class of 2020</div>
                        <div>Masters in Computer Application and scored 71% marks</div>
                    </div>
                </div>
                {/* </Grid>
                    <Grid item xs={4}> */}
                <div className="eachDiv">
                    <div className="stream">Graduation</div>
                    <div className="details">
                        <div>Patna University, Patna (Bihar)</div>
                        <div>Class of 2016</div>
                        <div>Bachelor of Computer Application and scored 84% marks</div>
                    </div>
                </div>
                {/* </Grid>
                </Grid> */}
            </div>
        </div>
    )
}

export default About;