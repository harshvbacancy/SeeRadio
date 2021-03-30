import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Layout.css';
import { COLORS } from '../colors'
import seeRadioLogo from '../Logo/logo.png';
import Orders from '../Orders/Orders';

const Layout = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    const dropdownButton = (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle caret-hidden style={{ background: COLORS.themeBlue, width:'35px', textAlign:'center' }} className="rounded-circle h-75 pl-0 pr-0">
                    HV
                </DropdownToggle>
            <DropdownMenu>
                <DropdownItem className="pl-3">
                    <i className="fas fa-user" style={{ color: COLORS.themeBlue }}></i>
                    <span className="dropdownName">Profile</span>
                </DropdownItem>
                <DropdownItem className="pl-3">
                    <i className="fas fa-lock" style={{ color: COLORS.themeBlue }}></i>
                    <span className="dropdownName">Change Password</span>
                </DropdownItem>
                <DropdownItem className="pl-3" >
                    <i className="fas fa-info-circle" style={{ color: COLORS.themeBlue }}></i>
                    <span className="dropdownName">Company Detail</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="pl-3" onClick={props.signOut} >
                    <i className="fas fa-sign-out-alt" style={{ color: 'red' }}></i>
                    <span className="dropdownName" style={{ color: 'red' }}>Sign Out</span>
                </DropdownItem >
            </DropdownMenu>
        </ButtonDropdown>
    );

    return (
        <div>
            <div className="d-flex flex-row justify-content-between ml-4 pb-2 pt-1"><img src={seeRadioLogo} alt="seeRadio" style={{width:'170px', height:'auto'}}/>
                <div className="d-flex flex-row ">
                <i className="fas fa-bell fa-rotate-45 custom-bell notification"></i>
                    {dropdownButton}
                    <div className="mr-4 pl-2">
                        <div className="COMPUTER-CITY">COMPUTER CITY</div>
                        <div className="Salesperson">Salesperson</div>
                        <div className="user-email">{props.userEmail}</div>
                    </div>
                </div>
            </div>
            <NavBar />
            <Orders />
        </div>
    )
}

export default Layout
