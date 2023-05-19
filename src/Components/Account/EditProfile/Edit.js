import React from 'react'
import { Box } from '@mui/system';
import "./Edit.css";
import { InputLabel } from '@mui/material';
import "../../../Utility/Interceptors/Reqinterceptor";
import axios from 'axios';
export default function Edit(props) {
  const removeDp = () =>{
    axios.post("http://localhost:8080/removedp").then((res) =>{
      console.log(res);
      localStorage.removeItem("token");
      localStorage.setItem("token", res.data.token);
      window.location.reload();
    });
  }
  return (
    <div>
        <Box 
        sx={{
            width: "100%",
            height: "100%",
            border: "1px solid wheat",
            marginLeft:"auto",
            marginRight:"auto",
            backgroundColor: 'white',
            padding: "10px",
            borderRadius:"8px",}}>
            <div style={{display:"flex"}}>   
            <div className='display-picture'><img src={props.state.avatar} style={{height:"100px", width:"100px"}}></img></div>
            <div style={{marginTop:"25px"}}>
            <button className='action-img'>Change Avatar</button>
            <button className='action-img uncolored' onClick={removeDp}>Remove</button>
            </div>
            </div> 
            <div className='form-container'>
            <div className="fields-container">
            <InputLabel className='input-label'>Name</InputLabel>
            <input type="text" className='edit-fields'></input>
            <InputLabel className='input-label'>Username</InputLabel>
            <input type="text" className='edit-fields'></input>
            </div>
            <div className="fields-container">
            <InputLabel className='input-label'>Email</InputLabel>
            <input type="text" className='edit-fields'></input>
            <InputLabel className='input-label'>D.O.B</InputLabel>
            <input type="text" className='edit-fields'></input>
            </div>
            <div className="fields-container">
            <InputLabel className='input-label'>Phone No</InputLabel>
            <input type="text" className='edit-fields'></input>
            <InputLabel className='input-label'>City</InputLabel>
            <input type="text" className='edit-fields'></input>
            </div>

            </div>
            <button className='action-img save'>Save Changes</button>
            </Box>
    </div>
  );
}
