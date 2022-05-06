import * as yup from "yup"

const schema = yup.object().shape({
    course: yup.string()
                .max(40, 'Too Long!')
                .required('Course is a required field.'),

    yearLevel: yup.string()
                .required('Year Level is a required field.'),
    


})

export default schema