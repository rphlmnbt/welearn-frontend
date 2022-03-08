import * as yup from "yup"

const schema = yup.object().shape({
    interest: yup.string()
                .max(50, 'Too Long!')
                .required('Interest is a required field.'),
    


})

export default schema