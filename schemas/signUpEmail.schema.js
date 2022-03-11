import * as yup from "yup"

const schema = yup.object().shape({
    email:yup.string().email('Invalid email').required('Email is a required field.'),
    password: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required('Password is a required field.'),
    


})

export default schema