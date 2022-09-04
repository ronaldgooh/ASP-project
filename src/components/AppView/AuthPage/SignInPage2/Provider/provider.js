import "./provider.css"
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import app from "../../../../firebase.js";
       

const Form2 = () => {

    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const signIn2 = () => 
    {   
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Logging in as provider...");
            navigate("/providerHomepage");

        })
        .catch((error) => {
            const errorCode = error.code;
            /*const errorMessage = error.message;*/
            alert(errorCode);

        });
    }

    return (
    <div className="FormBox" >
        <h1 className="Title">Sign in as: Provider</h1>
        <Link to='/login/consumer'>
            <button className="Button2" >Consumer</button>
        </Link>
        <Link to='/login/provider'>
            <button className="Button2" >Provider</button>
        </Link>
            <div class="FormContainer">
                <label className="Label" htmlFor="label">Business Username:</label>
                <input className="Input" type={"username"} placeholder="Please enter your username" onChange={(e) => setEmail(e.target.value)}/>
        
                <label className="Label" htmlFor="label">Password:</label>
                <input className="Input" type={"password"} placeholder="Please enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="Button" onClick={signIn2}>
                    Submit
                </button>
            </div>
        
        <Link to='/signup'>
        <button className="Button2" >
             Create a new account
        </button>
        </Link>
    </div>
    
    )};
export default Form2;
