import * as yup from "yup"

const schema = yup.object().shape({
    contactNumber: yup.string()
                .min(11, "Mobile Number must be 11 digits")
                .required('Mobile Number is a required field.'),

    


})

export default schema