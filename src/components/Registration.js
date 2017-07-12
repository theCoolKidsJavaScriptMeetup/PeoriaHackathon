import React, { Component } from 'react';
import Firebase from 'firebase'
import ReactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'
import { Formik } from 'formik';
import Yup from 'yup';

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
  constructor(props, context) {
    super(props, context)
    this.state = {
      user: { 
        email: '',
        firstName: '',
        lastName: ''
      },
      team: {
        name: '',
        password: ''
      },
      showRegistrationForm: false,
      showTeamForm: false,
      showRegistrationTypeButtons: true,
      teamActionType: ''
    }
    
    this.postNewUser = this.postNewUser.bind(this);
    this.startTeamRegistration = this.startTeamRegistration.bind(this);
  }

  componentWillMount() {
    const ref = Firebase.database().ref('users');
    this.bindAsArray(ref, 'users');
    // this.newUser('Tori', 'Huang', 'tori.huang@rocketsled.io', 'Developer')
  }

  componentWillUnmount() {
    this.unbind('users')
  }

  postNewUser() {
    // var userData = this.state.user;
    // // Get a key for a new Post.
    // var newUserKey = Firebase.database().ref().child('users').push().key;

    // // Write the new post's data simultaneously in the posts list and the user's post list.
    // var updates = {};
    // updates['/users/' + newUserKey] = userData;

    // return Firebase.database().ref().update(updates)
    //   .catch(err => console.log('err', err));
  }

  startTeamRegistration(reg_type) {
    this.setState({showTeamForm: true, showRegistrationTypeButtons: false, teamActionType: reg_type});
  }

  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>

        {this.state.showRegistrationTypeButtons ? 
        <div>
          <button onClick={()=> this.setState({showRegistrationForm: true, showRegistrationTypeButtons: false, team: {name: 'Individual', password:'klej9p34r'}})}>Individual</button>
          <button onClick={()=> this.startTeamRegistration("create_team")}>Create Team</button>
          <button onClick={()=> this.startTeamRegistration("join_team")}>Join Team</button>
        </div>
        : null }

        {
          this.state.showRegistrationForm ? ( this.state.team === "Individual" ? 
            <h3>You are registering as an Individual</h3> :
            <h3>You are registering with Team {this.state.team}</h3> ) : null
        }
        <div className="register_form">
          {
            this.state.showRegistrationForm ? 
              <RegistrationForm user={this.state.user}/>
            : null
          }
           {
            this.state.showTeamForm ? 
              <TeamForm type={this.state.teamType} action={this.state.teamActionType} team={this.state.team} />
            : null
          }
        </div>
      </div>
    );
  }
}

ReactMixin(Registration.prototype, ReactFireMixin)


const formikEnhancer = Formik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    firstName: Yup.string()
      .required('First name is required!'),
    lastName: Yup.string()
      .required('Last name is required!')
  }),
  mapPropsToValues: props => ({ 
      email: props.user.email,
      firstName: props.user.firstName,
      lastName: props.user.lastName
  }),
  handleSubmit: payload => {
    console.log(payload);
    alert("submitted!")
  },
  displayName: 'RegistrationForm',
});

const MyForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) =>
  <form onSubmit={handleSubmit}>
    {/* First Name */}
    <label htmlFor="firstName" style={{ display: 'block' }}>
      First Name
    </label>
    <input
      id="firstName"
      placeholder="First name"
      type="text"
      value={values.firstName}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.firstName && touched.firstName ? 'text-input error' : 'text-input'
      }
    />
    {errors.firstName &&
      touched.firstName &&
      <div className="input-feedback">
        {errors.firstName}
      </div>}
    {/* Last Name */}
    <label htmlFor="lastName" style={{ display: 'block' }}>
      Last Name
    </label>
    <input
      id="lastName"
      placeholder="Last name"
      type="text"
      value={values.lastName}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
      }
    />
    {errors.lastName &&
      touched.lastName &&
      <div className="input-feedback">
        {errors.lastName}
      </div>}
    {/* Email */}
    <label htmlFor="email" style={{ display: 'block' }}>
      Email
    </label>
    <input
      id="email"
      placeholder="Enter your email"
      type="text"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.email && touched.email ? 'text-input error' : 'text-input'
      }
    />
    {errors.email &&
      touched.email &&
      <div className="input-feedback">
        {errors.email}
      </div>}
    <button type="submit">Submit</button>
  </form>;

const RegistrationForm = formikEnhancer(MyForm);



const formikTeamEnhancer = Formik({
  validationSchema: Yup.object().shape({
    teamName: Yup.string()
      .required('Team name is required!'),
    teamPassword: Yup.string()
      .required('Team password is required!')
  }),
  mapPropsToValues: props => ({ 
      teamName: props.team.name,
      teamPassword: props.team.password
  }),
  handleSubmit: payload => {
    console.log(payload);
    alert("submitted!")
  },
  displayName: 'TeamRegistrationForm',
});

const TeamFormikForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) =>
  <form onSubmit={handleSubmit}>
    {/* Team Name */}
    <label htmlFor="teamName" style={{ display: 'block' }}>
      Team Name
    </label>
    <input
      id="teamName"
      placeholder="Team name"
      type="text"
      value={values.teamName}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.teamName && touched.teamName ? 'text-input error' : 'text-input'
      }
    />
    {errors.teamName &&
      touched.teamName &&
      <div className="input-feedback">
        {errors.teamName}
      </div>}
    {/* Team Password */}
    <label htmlFor="teamPassword" style={{ display: 'block' }}>
      Team Password
    </label>
    <input
      id="teamPassword"
      placeholder="Team Password"
      type="password"
      value={values.teamPassword}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.teamPassword && touched.teamPassword ? 'text-input error' : 'text-input'
      }
    />
    {errors.teamPassword &&
      touched.teamPassword &&
      <div className="input-feedback">
        {errors.teamPassword}
      </div>}
    {/* Confirm Password */}
    {values.action === "create_team" ? 
    <div><label htmlFor="confirmTeamPassword" style={{ display: 'block' }}>
      Confirm Password
    </label>
    <input
      id="confirmTeamPassword"
      placeholder="Confirm Team Password"
      type="password"
      value={values.confirmTeamPassword}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.confirmTeamPassword && touched.confirmTeamPassword ? 'text-input error' : 'text-input'
      }
    />
    {errors.confirmTeamPassword &&
      touched.confirmTeamPassword &&
      <div className="input-feedback">
        {errors.confirmTeamPassword}
      </div>} </div>: null }
    <button type="submit">Submit</button>
  </form>;

const TeamForm = formikTeamEnhancer(TeamFormikForm);
