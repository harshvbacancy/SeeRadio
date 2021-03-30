import React, { useState } from 'react'
import { Card, CardBody, Form, Button, FormGroup, Input, Label } from 'reactstrap';
import "./ForgotPassword.css";
import {COLORS} from '../colors';


const ForgotPassword = (props) => {
    const [details, setDetails] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
    const [visibleCurrentPass, setVisibilityCurrentPass] = useState(false);
    const [visibleNewPass, setVisibilityNewPass] = useState(false);
    const [visibleConfirmPass, setVisibilityConfirmPass] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        alert('Password has been changed')
        console.log(details)
    }
    return (
        <div className="my-5 mx-auto" >
            
            <Card className=" w-25 my-0 mx-auto shadow p-3 bg-white" style={{ borderRadius: '15px' }}>
                <CardBody>
                    <Form onSubmit={submitHandler}>
                    <FormGroup>
                            <Label
                                for="examplePassword"
                                className="float-left font-weight-bold">
                                Current Password
                            </Label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type={visibleCurrentPass ? "text" : "password"}
                                    style={{border:'0', borderBottom:'1px solid #202020'}}
                                    name="currentPassword"
                                    id="examplePassword"
                                    placeholder=" Enter Current password "
                                    onChange={event => setDetails({ ...details, password: event.target.value })}
                                    value={details.value} 
                                />

                                <i className={visibleCurrentPass ? "fas fa-eye icon-eye" : "fas fa-eye-slash icon-eye"} onClick={() => setVisibilityCurrentPass(!visibleCurrentPass)}></i>
                            </div>
                    </FormGroup>
                    <FormGroup>
                            <Label
                                for="examplePassword"
                                className="float-left font-weight-bold">
                                New Password
                                </Label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type={visibleNewPass ? "text" : "password"}
                                    style={{border:'0', borderBottom:'1px solid #202020'}}
                                    name="NewPassword"
                                    id="examplePassword"
                                    placeholder=" Enter New password "
                                    onChange={event => setDetails({ ...details, password: event.target.value })}
                                    value={details.value} 
                                />

                                <i className={visibleNewPass ? "fas fa-eye icon-eye" : "fas fa-eye-slash icon-eye"} onClick={() => setVisibilityNewPass(!visibleNewPass)}></i>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="examplePassword"
                                className="float-left font-weight-bold">
                                Confirm Password
                                </Label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type={visibleConfirmPass ? "text" : "password"}
                                    style={{border:'0', borderBottom:'1px solid #202020'}}
                                    name="password"
                                    id="examplePassword"
                                    placeholder="Confirm password "
                                    onChange={event => setDetails({ ...details, password: event.target.value })}
                                    value={details.value} 
                                />

                                <i className={visibleConfirmPass? "fas fa-eye icon-eye" : "fas fa-eye-slash icon-eye"} onClick={() => setVisibilityConfirmPass(!visibleConfirmPass)}></i>
                            </div>
                        </FormGroup>
                        <Button
                            value="Login"
                            style={{ backgroundColor: COLORS.themeBlue }}
                            className="shadow" block>
                            Change Password
                        </Button>

                        {(!props.error !== "") ? <div className="error">{props.error}</div> : ""}
                        
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default ForgotPassword
