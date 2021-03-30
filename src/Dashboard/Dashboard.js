import React from 'react'
import { Button } from 'reactstrap';

const Dashboard = (props) => {
    return (
        <div>
            <h1>Welcome, {props.userEmail}</h1>
            <Button color="danger" onClick={props.logOut}>Logout</Button>
        </div>
        
    )
}

export default Dashboard
