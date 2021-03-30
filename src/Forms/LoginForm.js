import React, { useState } from 'react'
import { Card, CardBody, Form, Button, FormGroup, Input, Label } from 'reactstrap';
import "./LoginForm.css";
import seeRadioLogo from '../Logo/logo.png';
import { COLORS } from '../colors';


const LoginForm = (props) => {
    const [details, setDetails] = useState({ email: "", password: "" });
    const [visible, setVisibility] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        props.login(details);
    }

    return (
        <div className="my-5 mx-auto" >
            <div className="mb-3 text-center">
                <img src={seeRadioLogo} alt="seeRadio" />
            </div>
            <Card className=" w-25 my-0 mx-auto shadow p-3 bg-white" style={{ borderRadius: '15px' }}>
                <CardBody>
                    <Form onSubmit={submitHandler}>
                        <FormGroup >
                            <Label
                                for="exampleEmail"
                                className="float-left font-weight-bold">
                                Email
                            </Label>
                            <Input
                                style={{border:'0', borderBottom:'1px solid #202020'}}
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Enter email"
                                onChange={event => setDetails({ ...details, email: event.target.value })}
                                value={details.value} />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="examplePassword"
                                className="float-left font-weight-bold">
                                Password
                                </Label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type={visible ? "text" : "password"}
                                    style={{border:'0', borderBottom:'1px solid #202020'}}
                                    name="password"
                                    id="examplePassword"
                                    placeholder=" Enter password "
                                    onChange={event => setDetails({ ...details, password: event.target.value })}
                                    value={details.value} 
                                />

                                <i className={visible ? "fas fa-eye icon-eye" : "fas fa-eye-slash icon-eye"} onClick={() => setVisibility(!visible)}></i>
                            </div>

                        </FormGroup>
                        <Button
                            value="Login"
                            style={{ backgroundColor: COLORS.themeBlue }}
                            className="shadow" block>
                            LOGIN
                        </Button>

                        {(!props.error !== "") ? <div className="error">{props.error}</div> : ""}
                        <div className="pt-4 text-primary text-center">Forgot password?</div>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default LoginForm
