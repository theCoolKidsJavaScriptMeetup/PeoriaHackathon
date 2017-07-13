import React from 'react'
import { Formik } from 'formik';
import Yup from 'yup';
import Firebase from 'firebase'
import ReactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'

const CreateTeamForm = ({ match }) => {
    return (<div className='Content'>
        <h2>Create A Team</h2>
        <div className="register_form">
            <TeamForm 
                action={ match.params.id }
                team={{ name: '', password: '' }
            }/>
        </div>
    </div>)
}

export default CreateTeamForm

 ReactMixin(CreateTeamForm.prototype, ReactFireMixin)

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
    var teamData = payload;
    var newTeamKey = Firebase.database().ref().child('teams').push().key;

    var updates = {};
    updates['/teams/' + newTeamKey] = teamData;

    return Firebase.database().ref().update(updates)
      .catch(err => console.log('err', err));
  },
  displayName: 'CreateTeamForm',
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
