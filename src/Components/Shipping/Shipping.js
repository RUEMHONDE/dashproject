import React, {useState} from 'react'
import { Box } from '@mui/system';
import { InputLabel } from '@mui/material';
export default function Shipping(props) {
  const [productData, setProductData] = useState({});
  const handleChange = (e)=>{
    props.state.setProductData((prevState) =>({
      ...prevState, [e.target.name]: e.target.value,
    }));
  }
  return (
    <div>
      <Box 
        sx={{
            width: "100%",
            height: "100%",
            border: "1px solid white",
            marginLeft:"auto",
            marginRight:"auto",
            backgroundColor: 'white',
            padding: "10px",
            borderRadius:"8px"}}>
            <h3>Shipping</h3>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Width:
            </InputLabel>
            <input type="number" className='product-input' placeholder='width'></input>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Height
            </InputLabel>
            <input type="number" className='product-input' placeholder='height'></input>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Weight
            </InputLabel>
            <input type="text-field" className='product-input' placeholder='weight'></input>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Shipping Fees
            </InputLabel>
            <input type="number" className='product-input' placeholder='$' 
            onChange={handleChange} name="Shipping"></input>
            
            
            </Box>
          </div>
  );
}
