import './App.css';
import Form from './Form';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/formSchema';

// initial or reset form values
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
// initial or reset error messages
const initialErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

// control whether 'submit' button is disabled
const initialDisabled = true;

function App() {
  // slices of state based on initial states defined above
    // form values
  const [formValues, setFormValues] = useState(initialFormValues);
    // error messages
  const [errors, setErrors] = useState(initialErrors);
    // disable submit toggler
  const [disabled, setDisabled] = useState(initialDisabled);
    // initial array of users
  const [users, setUsers] = useState([]);

  // posting to api & updating array of users onboard
  const onBoard = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([response.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch(err => console.error(err))
  }
  // validation - followed the guided project; still learning!
  const validate = (name, value) => {
    yup.reach(schema, name) //reaches to defined schema.name
      .validate(value) //validates each val according to schema.name
      .then(() => setErrors({ ...errors, [name]: '' })) // if validated, takes current set of errors and clears value in question
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] })) //if invalid, adds error message to value in question
  }
  // changing form values
  const change = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  // submitting new user, calling the post helper from above
  const userSubmit = () => {
    const user = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    };
    onBoard(user);
  }
  //side effect for toggling whether submit button is disabled
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
        <Form 
          values={ formValues }
          change={ change }
          submit={ userSubmit }
          disabled={ disabled }
          errors={ errors }
        />
    </div>
  );
}

export default App;
