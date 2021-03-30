import React from 'react'
import Completed from './Completed'
import Advertisers from './Advertisers/Advertisers'
import Order from './Order/Order'
import Assets from './Assets/Assets';

const FormSteps = (step, setStep, user, setUser) => [
    {
        title: 'Add New Advertiser',
        content: (
            <Advertisers
                setStep={setStep}
                step={step}
                user={user}
                setUser={setUser}
            />
        ),
    },
    {
        title: 'Add New Order',
        content: (
            <Order
                setStep={setStep}
                step={step}
                user={user}
                setUser={setUser}
            />
        ),
    },
    // {
    //     title: 'Add New Assets',
    //     content: (
    //         <Assets
    //             setStep={setStep}
    //             step={step}
    //             user={user}
    //             setUser={setUser}
    //         />
    //     ),
    // },
    {
        title: 'Complete',
        content:
            <Completed
                user={user}
            />,
    },
]
export default FormSteps