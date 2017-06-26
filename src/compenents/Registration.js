import React, { Component } from 'react';
import Firebase from 'firebase'
import ReactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'

import Button from './Button';


import '../App.css';

var config = {
  apiKey: "AIzaSyAR6WiLvKXj9_nS8NZELe7xhHLVxIov70E",
  authDomain: "peoria-hackathon-8b9e7.firebaseapp.com",
  databaseURL: "https://peoria-hackathon-8b9e7.firebaseio.com",
  projectId: "peoria-hackathon-8b9e7",
  storageBucket: "peoria-hackathon-8b9e7.appspot.com",
  messagingSenderId: "454113892052"
};
Firebase.initializeApp(config);
// const ref = new Firebase('https://peoria-hackathon-8b9e7.firebaseio.com/')

export default class Registration extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      users: []
    }
  }

  componentWillMount () {
    const ref = Firebase.database().ref('users');
    this.bindAsArray(ref, 'users');
    this.newUser('Tori', 'Huang', 'tori.huang@rocketsled.io', 'Developer')
  }

  componentWillUnmount () {
    this.unbind('users')
  }

  newUser(firstName, lastName, email, skill) {
    // A post entry.
    var userData = {
      firstName,
      lastName,
      email,
      skill,
    };

    // Get a key for a new Post.
    var newUserKey = Firebase.database().ref().child('users').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/users/' + newUserKey] = userData;

    return Firebase.database().ref().update(updates)
      .catch(err => console.log('err', err));
  }

  render() {
    return (
      <div className='Content'>
        <h2>Get Registered, like a boss</h2>
      </div>
    );
  }
}

ReactMixin(Registration.prototype, ReactFireMixin)
