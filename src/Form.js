import React from 'react';

function Form(props) {
    const { values, change, submit, disabled, errors } = props;
    const update = evt => {
        const { name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return(
        <form className='container' onSubmit={ onSubmit }>
            <div className='submit'>
                <h2>Welcome Aboard!</h2>
                <button disabled={ disabled }>submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div className='inputs'>
                <h4>Enter Your Information</h4>
                <label>Name
                    <input 
                        name='name'
                        type='text'
                        onChange={ update }
                        value={ values.name }
                        placeholder="Name"
                    />
                </label>
                <label>Email Address
                    <input 
                        name='email'
                        type='text'
                        onChange={ update }
                        value={ values.email }
                        placeholder="Email Address"
                    />
                </label>
                <label>Password
                    <input 
                        name='password'
                        type='text'
                        onChange={ update }
                        placeholder="Password"
                        value={ values.password }
                    />
                </label>
                <label>Accept Terms and Conditions
                    <input 
                        name='terms'
                        type='checkbox'
                        checked={ values.terms }
                        onChange={ update }
                    />
                </label>
            </div>
        </form>
    )
}

export default Form;