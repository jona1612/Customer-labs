import React, { useState } from 'react'
import "./Sidebar.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';


function Sidebar({ openSidebar, setOpenSidebar }) {


    const options = [{
        first_name: "First Name",
        last_name: "Last Name",
        gender: "Gender",
        age: "Age",
        account_name: "Account Name",
        city: "City",
        state: "State",
    }]

    return (
        <div className={`sidebar ${openSidebar ? 'd-block' : 'd-none'}`}>
            <div className='main'>

            </div>

            <div className='sidebar-content'>
                <header className="header" onClick={() => setOpenSidebar(false)}> <ChevronLeftIcon />Saving Segment</header>
                <div className="ms-4 mt-4">
                    <label value="">Enter the Name of the Segment</label><br />
                    <input className='mt-3 p-1 w-75 fs-6'
                        type="text" id="Name" name="Name" placeholder="Name of the segment"
                    ></input>
                </div>
                <p className='mt-4 ms-4'>
                    To save your segment, you need to add the schemas <br /> to build the query
                </p>
                <div className='text-end me-5'>
                    <span className="circle1"></span> - User Traits
                    &nbsp;&nbsp;&nbsp;
                    <span className="circle2"></span> - Group Traits
                </div>
                <div className='ms-4 mt-4'>
                    <span className="circle2"></span>
                    <select name="" id="" className='p-1 w-50 ms-3'>
                        <option value="volvo">First Name</option>
                    </select>
                    <span className='box ms-2'><RemoveOutlinedIcon /></span>
                </div>
                <div className='ms-4 mt-4'>
                    <span className="circle3"></span>
                    <select name="" id="" className='p-1 w-50 ms-3'>
                        <option value="segment">Add schema to segment</option>
                    </select>
                    <span className='box ms-2'><RemoveOutlinedIcon /></span>
                </div>
                <button className='btn p-0 mt-3 ms-5 text-success fw-bold'> + <span className='text-decoration-underline'>Add new schema</span></button>

            </div >
            <div className='footer'>
                <button className='btn btn-success ms-3 p-1'>
                    Save the Segment
                </button>
                <button className='btn btn-light text-danger ms-3 p-1 fw-bold' onClick={() => setOpenSidebar(false)}>
                    Cancel
                </button>
            </div>
        </div >
    );
}

export default Sidebar