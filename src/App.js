import './App.css';
import Form from './Form';
import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import schema from '../validation/formSchema';

// initial or reset form values
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
// initial or reset error messages
const initialErrors = {

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
