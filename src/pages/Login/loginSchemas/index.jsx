import * as Yup from "yup";

export const loginSchemas = Yup.object({
        email:Yup.string().email().required("Please Enter Valid Email"),
        password: Yup.number().min(4).required("Please Enter Valid Password")
    }
    ) 