import React, { createContext, useEffect, useState } from 'react';
import logo from '../static/images/logo.svg'
import '../static/css/App.css'
import DocumentPreference from './components/DocumentPreference/DocumentPreference';
import Account from './components/Account/Account';
import Header from './components/Header/Header';
import { accounts } from '../static/mockData';
import { Context } from './Context/Context';
import { transformedData } from './utils/helpers';

const App= () => {

    const [accountData, setAccountData] = useState([])
    useEffect(() =>{
        const transformedAccountData = transformedData(accounts);
        setAccountData(transformedAccountData);
    },[])
    
    const [updateAccount, setUpdateAccount] = useState("");

    const updateAccountInfo = (accountInfo) => {
        setUpdateAccount(accountInfo)
    }
   
    return (
      <Context.Provider value={{ accountData, updateAccountInfo, updateAccount }}>
        <div className="App">
          <Header />
          <Account />
          <DocumentPreference />
        </div>
      </Context.Provider>
    );
    
}

export default App;