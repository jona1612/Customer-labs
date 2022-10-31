import React, { useState } from 'react';
import "./Navbar.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';

function Navbar() {

    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className={`${openSidebar && 'blur'}`}>
            <div className='topbar'>
                <ChevronLeftIcon />View Audience
            </div>
            <div className='ms-5 mt-5'>
                <Button className='ms-5' variant="outlined" onClick={() => setOpenSidebar(true)}>Save Segment</Button>
            </div>
        </div>
    )
}

export default Navbar