import "./index.css"
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import app from "../../../../../../firebase.js";

const Form3 = () => {
const auth = getAuth(app);
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

const signUp= () => 
  {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          /*const user = userCredential.user;*/
          alert("User has been successfully been created!")
          navigate("/login/consumer")

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
         /* const errorMessage = error.message;*/
          alert(errorCode);
  
          // ..
        });
    }
    return (
    <div className="FormBox" >
        <h1 className="Title">Sign up as: Consumer</h1>
        <Link to='/signup'>
            <button className="Button2" >Consumer</button>
        </Link>
        <Link to='/signup/provider'>
            <button className="Button2" >Provider</button>
        </Link>
            <div class="FormContainer">
            <label className="Label" htmlFor="label">Username:</label>
            <input className="Input" type={"username"} placeholder="Please enter your username" onChange={(e) => setEmail(e.target.value)}/>
      
            <label className="Label" htmlFor="label">Password:</label>
            <input className="Input" type={"password"} placeholder="Please enter your password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="Button" onClick={signUp}>
                Sign Up
            </button>
        </div>
        <Link to='/login/consumer'>
            <button className="Button2" >
                Sign in With an existing account
            </button>
        </Link>
    </div>
    
    )};
export default Form3;

