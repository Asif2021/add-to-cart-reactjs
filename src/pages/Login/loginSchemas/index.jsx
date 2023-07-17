import * as Yup from "yup";

export const loginSchemas = Yup.object({
        email:Yup.string().email().required("Email is incorrect"),
        password: Yup.string().min(4).required("Password is incorrect")
    }
    ) 