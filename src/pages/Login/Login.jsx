import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginSchemas } from './loginSchemas'

const  initialValues = {
   email: "",
   password: ""
}

const Login = () => {
            // creating a veriable to from useNavigate hook 
   const navigate = useNavigate();
  

   const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
         
            // getting email and password from user 
         initialValues:initialValues,
         
            // putting validation on data 
         validationSchema: loginSchemas,

            // funcation that called on form submission 
         onSubmit: (values) => {
            // getting data from localStorage 
                  const loggeduser = JSON.parse(localStorage.getItem("user"));
            // matching new data with localstorage data either it same or not 
   if(values.email === loggeduser.email 
      && values.password === loggeduser.password)
   {
            // setting localstorage to true that means user is loggedIn
      localStorage.setItem("loggedin", true);

            // navigating to home page 
         navigate("/");
   }
}
   })


  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
        <div className='form_container p-5 rounded bg-white'> 

{/* form started here  */}
       <form onSubmit={handleSubmit} className='text-start fw-bold p-2'>
{/* signIn heading  */}
 <h3 className='text-center'>Sign In</h3>

 {/* input filed form email  */}
 <div className='mb-3'>
 <label htmlFor="email" className="form-label">EMail</label>
 <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className='form-control' autoComplete='off'/>
 {
      errors.email && touched.email ? (<p className='errors_form'>{errors.email}</p>): null
 }
 </div>


{/* input field for password  */}
 <div className='mb-3'>
 <label htmlFor="password" className="form-label">Password</label>
 <input type="password"  name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} className='form-control'/>
 {
      errors.password && touched.password ? (<p className='errors_form'>{errors.password}</p>): null
 }
 </div>


 <div className='mb-3'>
    <input type="checkbox"  className='custom-control custom-checkbox' id='check'/>
    <label htmlFor="check" className='custom-input-label ms-2'>
        Remember Me
    </label>
 </div>

 {/* button for signIn  */}
 <div className='d-grid'> 
<button type='submit' className='btn btn-dark'>SignIn</button>
 </div>

 <p className='text-end mt-3'>
    Not have any Account <Link to={"/register"} className='ms-2'>SignUp</Link>
 </p>

 {/* form end here  */}
       </form>
       </div>
    </div>
  )
}

export default Login