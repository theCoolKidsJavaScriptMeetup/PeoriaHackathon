import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Firebase from 'firebase'

import Navigation from './components/Navigation';
import Button from './components/Button';
import Main from './components/Main';
import Sponsors from './components/Sponsors';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import CreateTeamForm from './components/CreateTeamForm';
import JoinTeamForm from './components/JoinTeamForm';

import logo from './logo.png';
import './App.css';

class App extends Component {
  componentWillMount () {
    // console.log(firebase);
    var config = {
      apiKey: "AIzaSyAR6WiLvKXj9_nS8NZELe7xhHLVxIov70E",
      authDomain: "peoria-hackathon-8b9e7.firebaseapp.com",
      databaseURL: "https://peoria-hackathon-8b9e7.firebaseio.com",
      projectId: "peoria-hackathon-8b9e7",
      storageBucket: "peoria-hackathon-8b9e7.appspot.com",
      messagingSenderId: "454113892052"
    };

    Firebase.initializeApp(config);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Route exact path="/" component={Main}/>
          <Route exact path="/sponsors" component={Sponsors}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/faq" component={FAQ}/>
          <Route path='/register/:id' component={RegistrationForm} />
          <Route path='/registerTeam/join' component={JoinTeamForm} />
          <Route path='/registerTeam/create' component={CreateTeamForm} />
        </div>
      </Router>
    );
  }
}

export default App;
