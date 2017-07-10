import React, { Component } from 'react';
import Firebase from 'firebase'
import ReactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'

import Button from './Button';

import '../App.css';
import '../Registration.css'

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
      users: [],
      email: 'Email',
      firstName: 'First Name',
      lastName: 'Last Name',
      skill: 'Select Skill'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  componentWillMount () {
    const ref = Firebase.database().ref('users');
    this.bindAsArray(ref, 'users');
    // this.newUser('Tori', 'Huang', 'tori.huang@rocketsled.io', 'Developer')
  }

  componentWillUnmount () {
    this.unbind('users')
  }

  newUser() {
    // A post entry.
    var userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      skill: this.state.skill,
    };

    // Get a key for a new Post.
    var newUserKey = Firebase.database().ref().child('users').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/users/' + newUserKey] = userData;

    return Firebase.database().ref().update(updates)
      .catch(err => console.log('err', err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  renderForm() {
    return (
      <div className="register_form">
        <form onSubmit={this.newUser}>
          <label>First Name</label>
            <input type="text" name="firstName" placeholder={this.state.firstName} onChange={this.handleInputChange} />
          <label>Last Name</label>
            <input type="text" name="lastName" placeholder={this.state.lastName} onChange={this.handleInputChange} />
          <label>Email</label>
            <input type="text" name="email" placeholder={this.state.email} onChange={this.handleInputChange} />
          <label>Select Your Skill</label>
          <select value={this.state.skill} name="skill" onChange={this.handleInputChange}>
            <option value='Select Skill' disabled>Select Skill</option>
            <option value="Other">Other</option>
            <option value="Marketing">Marketing</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
          </select>
         <button className="button registerbutton" type="submit" value="Submit">Register</button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className='Content'>
        <h2>Get Registered, like a boss</h2>
        {this.renderForm()}
      </div>
    );
  }
}

ReactMixin(Registration.prototype, ReactFireMixin)
