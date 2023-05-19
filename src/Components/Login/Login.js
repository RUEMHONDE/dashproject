import React from 'react';
import "./Login.css";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {isExpired, decodeToken} from "react-jwt";
import book from "../images/book.jpg";
import { useState } from "react";
import axios from 'axios';

export default function Login(props) {
  const [loginData, setLoginData] = useState({});
  const handleChange = (e)=>{
    setLoginData((prevState) =>({
      ...prevState, [e.target.name]: e.target.value
    }));
  }
  const navigate = useNavigate();
  const login = async () =>{
    console.log("test");
    var response = await axios.post("http://localhost:8080/login", loginData);
    var decodeData = decodeToken(response.data);
    localStorage.setItem("token", response.data);
    console.log(decodeData);
    props.state(response.data);
    navigate("/");
  };
  return (
    <div>
        <div className='login-container'>
          <div className='input-container'>
        <TextField
          required
          id="outlined-required"
          label="Username"
          size='small'
          sx={{width:"242px"}}
          onChange={handleChange}
          name="username"
         /><br/><br/>
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          size='small'
          onChange={handleChange}
          name="password"
        /><br/>
        <p>Forgot password</p>
        <br/>
         <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /><br/>
         <Button variant="contained" onClick={login} sx={{width: "250px"}}>Login</Button>
         </div>
         <div className='image-container'>
         <img className='books' src={book}></img>
          
         </div>
        </div>
      
    </div>
  );
}
