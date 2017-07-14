import React from 'react'
import { Formik } from 'formik';
import Yup from 'yup';
import Firebase from 'firebase'
import ReactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire'

const JoinTeamForm = ({ match, history }) => {
    var teamName = match.params.id
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
    // test for existence
    // var ref = Firebase.database().ref("teams");
    // console.log(ref)
    // // ref.orderByChild("teamName").equalTo(payload.teamName).on("child_added", function(snapshot) {
    // //     console.log(snapshot.key);
    // // });
    // ref.once("value")
    // .then(function(snapshot) {
    //     console.log(snapshot)
    //     var pword = snapshot.child("teamPassword").val(); // {first:"Ada",last:"Lovelace"}
    //     console.log(pword)
        // var firstName = snapshot.child("name/first").val(); // "Ada"
        // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
        // var age = snapshot.child("age").val(); // null
    // });

    setSubmitting(false)
    // setErrors({teamName: "Sorry, that's not an existing team"})
    // setErrors({teamPassword: "Invalid Password"})

    props.history.push('/register/' + payload.teamName)
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
    <button type="submit">Submit</button>
  </form>;

const TeamForm = formikTeamEnhancer(TeamFormikForm);
