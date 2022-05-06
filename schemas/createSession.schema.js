import * as yup from "yup"

const schema = yup.object().shape({
    session_name: yup.string()
                .max(20, 'Too Long!')
                .required('Session Name is a required field.')
    


})

export default schema