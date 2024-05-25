import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from 'components/Context';

const userObj = {
  name: 'Syimyk'
}


const user2 ={
  name: 'Omurbek'
}

const signIn = (user) => {
  console.log(user, 'user');
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalContext.Provider value={{ userObj, user2, signIn }}>
        <App />
    </GlobalContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

