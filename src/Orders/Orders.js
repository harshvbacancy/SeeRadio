import { Card, CardBody } from 'reactstrap';
import React, { useState, useReducer } from 'react'
import './Orders.css'
import { UserReducer, DefaultUser } from './Reducer'
import FormSteps from './FormSteps'

const Orders = () => {
    let [step, setStep] = useState(0)
    const [user, setUser] = useReducer(UserReducer, DefaultUser)
    let steps = FormSteps(step, setStep, user, setUser)
    // const [step, setActiveStep] = useState(0);

    // const handleNext = () => {
    //     setActiveStep(prevActiveStep => prevActiveStep + 1)
    // }

    // const getStepsContent = (stepIndex) => {
    //     switch (stepIndex) {
    //         case 0:
    //             return <Advertisers handleNext={handleNext} activeStep={activeStep} />;
    //         case 1:
    //             return <Order />;
    //         case 2:
    //             return <Assets />;
    //     }
    // }

    return (
        <div className="mt-5">

            <div className="steppers">
                <div className={step === 0 ? "currentForm" : "completed"}>
                    <div className=" mt-2 mr-3 d-flex flex-row float-right">
                        { step !== 0 ? <i class=" mt-3 ml-2 pr-2 fas fa-check-circle customIcon"></i>: <div></div> }
                        <div>
                            <div>Step 1</div>
                            <div>Add Advertisers</div>
                        </div>
                    </div>
                </div>
                <div className={step === 1 ? "currentForm" : [step === 0 ? "newForm" : "completed"]} >
                    <div className=" mt-2 mr-3 d-flex flex-row float-right">
                        { step !== 1 && <i className=" mt-3 ml-2 pr-2 fas fa-check-circle customIcon"></i>}
                        <div>
                            <div>Step 2</div>
                            <div>Add Order</div>
                        </div>
                    </div>
                </div>
                <div className={step === 2 ? "currentForm" : [step === 3 ? "completed" : "newForm"]} >
                    <div className=" mt-2 mr-3 d-flex flex-row float-right">
                        { step !== 2 && <i className=" mt-3 ml-2 pr-2 fas fa-check-circle customIcon"></i>}
                        <div>
                            <div> Step 3</div>
                            <div> Add Assets</div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Card className="my-0 mx-auto shadow p-3 bg-white" style={{ width: '65em' }}>
                <CardBody >
                    <div >
                        <h1>Register User: {steps[`${step}`].title} </h1>
                        <h4>
                            Step {step + 1}/{steps.length}
                        </h4>
                        <div >{steps[`${step}`].content}</div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Orders
