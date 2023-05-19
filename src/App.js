import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createContext } from 'react';
import Header from './Components/CommonComponents/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Sidenav from './Components/CommonComponents/Sidenav/Sidenav';
import Account from './Components/Account/Account';
import Productslist from './Components/Products List/Productslist';
import AddProducts from './Components/Add Products/AddProducts';
import { searchContext } from "./Context/searchContext";
import { useEffect,useState } from 'react';
function App() {
  const [search, updateSearch] = useState("");
  const [token, setToken] = useState();
  useEffect(() => {
   setToken(localStorage.getItem("token"));
  }, []);
  
  return(
    <searchContext.Provider
      value={{ searchVariable: search, updateSearchVariable: updateSearch }}
    >
    <BrowserRouter>
    {token ==null && <Login state={setToken}/>}
    {token != null && (
    <div>
      <div className='app-container'>
        <div className='sidenav-container'>
          <Sidenav />
        </div>
        <div className='main-container'>
          <div className='header-container'><Header /></div>
          <div className='content-container'>
    <Routes>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/products' element={<Productslist/>}></Route>
      <Route path='/addproducts' element={<AddProducts/>}></Route>
    </Routes>
    </div>
        </div>
      </div>
    </div>
    )}
    </BrowserRouter>
    </searchContext.Provider>);
};
export default App;
