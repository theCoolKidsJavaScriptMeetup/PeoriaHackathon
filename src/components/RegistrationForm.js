import React, { Component } from 'react'
import { Formik } from 'formik';
import Yup from 'yup';
import Firebase from 'firebase'
import ReactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'

// const ref = new Firebase('https://peoria-hackathon-8b9e7.firebaseio.com/')

 export default class RegistrationForm extends Component {
    render() {
        console.log(this.props)
        return ( 
        <div className='Content'>
            <h2>Almost There!</h2>
            {
                (this.props.match.params.id === "individual") ? 
                    <h3>You are registering as an Individual</h3> :
                    <h3>You are registering with Team {this.props.match.params.id}</h3> 
            }
        <div className="register_form">
            <Form 
              user={{ 
                email: '',
                firstName: '',
                lastName: '',
                teamName: this.props.match.params.id
              }}
              history={this.props.history}
             /> 
        </div>
        </div>
     )
    }
 }

 ReactMixin(RegistrationForm.prototype, ReactFireMixin)

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
      lastName: props.user.lastName,
      team: props.user.teamName
  }),
  handleSubmit: (payload, {props}) => {
    var userData = payload;
    var newUserKey = Firebase.database().ref().child('users').push().key;

    var updates = {};
    updates['/users/' + newUserKey] = userData;

    var res =  Firebase.database().ref().update(updates)
      .then(props.history.push('/registered'))
      .catch(err => console.log('err', err));
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

const Form = formikEnhancer(MyForm);