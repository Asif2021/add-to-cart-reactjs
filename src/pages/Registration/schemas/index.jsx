import React from 'react'
import * as Yup from "yup";

export const signupSchemas = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(4).required("Please Enter Your Password")
})