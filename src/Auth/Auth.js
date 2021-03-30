import React, { useState } from 'react';
import LoginForm from '../Forms/LoginForm';
import Layout from '../Layout/Layout';

const Auth = () => {
    const adminUser = {
        email: "harsh.verma+2@bacancy.com",
        password: "harsh123"
    }

    const [user, setUser] = useState({email: "" })
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details)

        if(details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Loged in")
            setUser({email: details.email})

        } else {
            console.log("Details do not match");
            setError("Details do not match")
        }
    }

    const SignOut = () => {
        setUser({email: ""})
    }
    return (
        <div>
            {(user.email !== "") ?
                <Layout userEmail={user.email} signOut={SignOut} />
                : <LoginForm login={Login} error={error }/>
    }    
        </div>
    )
}



export default Auth;

