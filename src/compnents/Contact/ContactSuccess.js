import React from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ContactSuccess = (props) => {
    return (
        <div className="contactRootDiv">
            <div className="form" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.4rem'}}>
                <DoneAllIcon />{props.message}
            </div>
        </div>
    )
}

export default ContactSuccess;