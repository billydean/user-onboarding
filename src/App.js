import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, { useState } from 'react';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const initialErrors = {

};
const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
        <Form />
    </div>
  );
}

export default App;
