import * as yup from 'yup';

const mySchema = yup.object().shape({
    name: yup
        .string()
        .required(),
    email:yup,
    password: yup,
    terms: yup.boolean()
})

export default mySchema;

const initialFormValues = {
    name: "",
    email: "",
    password: "",
    terms: false,
  };