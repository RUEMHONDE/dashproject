import { TextField } from '@mui/material';
import React, {useEffect, useState} from 'react';
import "./Account.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Edit from './EditProfile/Edit';
import Change from './ChangeProfile/Change';
import {isExpired, decodeToken} from "react-jwt";
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function Account() {
  var [decodeData, setFullData]=useState();
  useEffect(() => {
    var token = localStorage.getItem("token");
    setFullData(decodeToken(token));
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    
    <div>
      {decodeData != null && (
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', 
      height: "100vh", width:"95%", margin:"0 auto", marginTop:"20px"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Edit Profile" {...a11yProps(0)} />
        <Tab label="Change Password" {...a11yProps(1)} />
       
      </Tabs>
      <TabPanel value={value} index={0} style={{width:"80%"}}>
        <Edit state={decodeData}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Change />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
    )}
    </div>
 
  );
}
