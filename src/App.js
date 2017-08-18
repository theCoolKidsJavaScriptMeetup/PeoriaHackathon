import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Firebase from 'firebase'

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';
import Sponsors from './components/Sponsors';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import CreateTeamForm from './components/CreateTeamForm';
import JoinTeamForm from './components/JoinTeamForm';
import RegistrationSuccess from './components/RegistrationSuccess';
import ScrollToTopRoute from './components/ScrollToTopRoute';

import './App.css?ver=1.1';

class App extends Component {
  componentWillMount () {
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

          <ScrollToTopRoute exact path="/" component={Main}/>
          <ScrollToTopRoute exact path="/sponsors" component={Sponsors}/>
          <ScrollToTopRoute exact path="/registration" component={Registration}/>
          <ScrollToTopRoute exact path="/faq" component={FAQ}/>
          <ScrollToTopRoute path='/register/:id' component={RegistrationForm} />
          <ScrollToTopRoute path='/registerTeam/join/:id' component={JoinTeamForm} />
          <ScrollToTopRoute path='/registerTeam/create' component={CreateTeamForm} />
          <ScrollToTopRoute path='/registered/:id' component={RegistrationSuccess} />
          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
