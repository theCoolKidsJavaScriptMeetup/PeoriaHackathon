import React from 'react'
import { Formik } from 'formik';
import Yup from 'yup';
import Firebase from 'firebase'
import ReactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'

const JoinTeamForm = ({ match, history }) => {
    return (<div className='Content'>
        <h2>Join A Team</h2>
        {
          
          (match.params.id === "new-team") ?
            <div>
              <p>Success! You have created your team.</p>
              <p>Please enter your team name and password.</p>
            </div>
            : null
        }
        <div className="register_form">
            <TeamForm 
                team={{ name: '', password: '' }}
                history={history}
            />
        </div>
    </div>)
}

export default JoinTeamForm

 ReactMixin(JoinTeamForm.prototype, ReactFireMixin)

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
  handleSubmit: (payload, {props, setErrors, setSubmitting }) => {
    // setSubmitting(false)
    

    // TODO: What if database can't be reached?
    // test for existence
    var ref = Firebase.database().ref("teams")    
    ref.orderByChild('teamName').equalTo(payload.teamName).on("value", function(snapshot) {
      var data = snapshot.val()
      var key = ''
      snapshot.forEach((data) => {
        key = data.key
      })
      

      // does team exist?
      if (data === null) {
        setErrors({ teamName: "Sorry, that's not an existing team" })
      } else {
        var team = data[key]
        console.log(team)
        console.log("db: " + team.teamPassword)
        console.log("form: " + payload.teamPassword)
        if (team.teamPassword === payload.teamPassword) {
          // Success! Continue to registration!
          props.history.push('/register/' + payload.teamName)
        } else {
          setErrors({ teamPassword: "Invalid Password" })
        }
      }      
    });
  },
  displayName: 'JoinTeamForm',
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
      placeholder="Team Name"
      type="text"
      value={values.teamName}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.teamName && touched.teamName ? 'text-input error textInput' : 'text-input textInput'
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
        errors.teamPassword && touched.teamPassword ? 'text-input error textInput' : 'text-input textInput'
      }
    />
    {errors.teamPassword &&
      touched.teamPassword &&
      <div className="input-feedback">
        {errors.teamPassword}
      </div>}
    <button type="submit">Submit</button>
  </form>;

const TeamForm = formikTeamEnhancer(TeamFormikForm);
