import * as yup from "yup"

const schema = yup.object().shape({
    firstName: yup.string()
                .max(50, 'Too Long!')
                .required('First Name is a required field.'),
    lastName: yup.string()
                .max(50, 'Too Long!')
                .required('Last Name is a required field.'),
})

export default schema
