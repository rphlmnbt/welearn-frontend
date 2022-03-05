import * as yup from "yup"

const schema = yup.object().shape({
    contactNumber: yup.number()
                .min(1, "Invalid")
                .nullable(),
    


})

export default schema