import * as yup from "yup"

const schema = yup.object().shape({
    university: yup.string()
                .max(50, 'Too Long!')
                .required('University is a required field.'),
    


})

export default schema