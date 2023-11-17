import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import './assets/styles/global.css';
import './App.css';

import Header from './components/Header/header';
import TinderCards from './components/Cards/TinderCards';
import SwipeButtons from './components/Buttons/SwipeButtons';
import Chats from './components/Chats/Chats';
import ChatScreen from './components/Chats/ChatScreen/index';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import SignupCompany from './pages/SignupCompany';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <div className="App">

     <Router>
       <Switch>
          <Route path="/signup">
              <Signup/>
          </Route>

          <Route path="/signup-company">
              <SignupCompany/>
          </Route>

          <Route path="/signin">
            <Signin/>
          </Route>
         {/* Individual chat screen */}
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route> 

          <Route path="/EditProfile/:person">
            <Header backButton="/EditProfile" />
            <EditProfile />
          </Route> 
          
          {/* Chats screen */}
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/EditProfile">
            <Header backButton="/" />
            <EditProfile />
          </Route> 

          {/* Tinder Cards */}
          <Route path="/">
            <Header />
            <TinderCards />
            {/*  Buttons bellow tinder cards */}
            <SwipeButtons />
          </Route>



          
       </Switch>
     </Router>

    </div>
  );
}

export default App;
