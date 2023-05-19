import React, {useContext, useEffect, useState} from 'react';
import "./Header.css";
import bell from "../../images/bell.png";
import {isExpired, decodeToken} from "react-jwt";
import {searchContext} from "../../../Context/searchContext";
export default function Header() {
  var [decodeData, setFullData]=useState();
  const [imgpath, setImgPath]= useState();
  const {searchVariable, updateSearchVariable} = useContext(searchContext);
  const handleChange= (e) =>{
    updateSearchVariable(e.target.value);
  };
  useEffect(() => {
    var token = localStorage.getItem("token");
    setFullData(decodeToken(token));
    
  }, []);
  return (
    <div>
        <header>
        <input type="text" className='header-input' placeholder="search"
        onChange={handleChange}
        ></input>
        <div className='user-details'>
        <img className='notifications' src={bell}></img>
        <p className='user-name'>{decodeData?.FullName}</p>
        </div>
        <div className='dp'>
          <img src={`/${decodeData?.avatar}`} style={{height:"45px", width:"45px"}}></img>
        </div>
        </header>
    </div>
  )
}
