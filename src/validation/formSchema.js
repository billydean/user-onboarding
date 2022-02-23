import * as yup from 'yup';

const mySchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    email:yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required'),
    terms: yup.boolean()
})

export default mySchema;