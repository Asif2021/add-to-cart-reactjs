import React, { useState } from 'react';
import "./Registration.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import { signupSchemas } from './schemas';

const initialValues = {
    name: "",
    email: "",
    password: ""
}


const Registration = () => {
  const navigate = useNavigate();

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    // getting data from user 
    initialValues: initialValues,
    // vaidation on data got from user 
    validationSchema: signupSchemas,
    // function calling on form submit 
    onSubmit: (values, action) => {
      console.log(values);
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/login");
      // action.resetForm();
    }
  })
   
  return (
    <div className='register container d-flex justify-content-center align-items-center vh-100 '>
      <div className='register_container d-flex justify-content-center align-items-center border rounded p-5'>

        <form onSubmit={handleSubmit} className='text-start fw-bold'>

          <h2 className='text-center'>SignUp</h2>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">UserName</label>
            <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} className="form-control" id="exampleInputusername" aria-describedby="username" autoComplete='off' />
          {
           errors.name && touched.name ? (<p className='errors_form'>{errors.name}</p>): null
          }
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            {
           errors.email && touched.email ? (<p className='errors_form'>{errors.email}</p>): null
          }
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} className="form-control" id="exampleInputPassword1" />
            {
           errors.password && touched.password ? (<p className='errors_form'>{errors.password}</p>): null
            }
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
          <p className='text-end mt-2'>
            Already Have Account <Link to={"/login"} className='ms-2'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Registration