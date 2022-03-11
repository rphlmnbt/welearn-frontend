import * as yup from "yup"

const schema = yup.object().shape({
    gender: yup.string()
                .required('Gender is a required field.'),
    birthDate: yup.string()
        .required('Birth Date is a required field.'),

    


})

export default schema