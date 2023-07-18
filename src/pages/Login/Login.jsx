import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {

   // creating a veriable from useNavigation hook 
   const navigate = useNavigate();

   // creating state for getting email and password from user 
   const [input, setInput] = useState({
      email: "",
      password: ""
   })
   
   // creating state for handling errors
   const [errors, setErrors] = useState([])

   // validate function for validation of email and password. This function is called within handleLogin function 
   const validate = () => {
      const error = {};
      const loggeduser = JSON.parse(localStorage.getItem("user"));
      if (input.email === "") {
         error.email = "Email is Required"
      } else if (input.email !== loggeduser.email) {
         error.email = "Email Not Matched"
      }
      if (input.password === "") {
         error.password = "password is Required"
      } else if (input.password !== loggeduser.password) {
         error.password = "password Not Matched"
      }

      return error;
   }

   // onsubmit of form handleLogin function is called
   const handleLogin = (e) => {
      // preventing default behavior of form 
      e.preventDefault();
      // passing validation into a veriable 
      const errors = validate();
      // updating errors state
      setErrors(errors);
      // checking if error length is zero
      if (Object.keys(errors).length === 0) {
      // localstorage is setting to true
         localStorage.setItem("loggedin", true)
      // navigating to home page 
         navigate("/");
      }
   }

   return (
      <div className='login template d-flex justify-content-center align-items-center vh-100'>
         <div className='form_container p-5 rounded bg-white'>
      {/* form started here  */}
            <form onSubmit={handleLogin} className='text-start fw-bold p-2'>
      {/* heading of signin on the top of form  */}
               <h3 className='text-center'>SignIn</h3>

      {/* input field for getting user email  */}
               <div className='mb-3'>
                  <label htmlFor="email" className="form-label">EMail</label>
                  <input type="email" name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} className='form-control' autoComplete='off' />
                  {errors.email && <p className='error_loginForm'>{errors.email}</p>}
               </div>

      {/* input field for getting user password  */}
               <div className='mb-3'>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} className='form-control' />
                  {errors.password && <p className='error_loginForm'>{errors.password}</p>}
               </div>

               <div className='mb-3'>
                  <input type="checkbox" className='custom-control custom-checkbox' id='check' />
                  <label htmlFor="check" className='custom-input-label'>
                     Remember Me
                  </label>
               </div>
      {/* signIn button  */}
               <div className='d-grid'>
                  <button className='btn btn-dark'>SignIn</button>
               </div>
             
            <p className='text-end mt-3'>
                  Not have any Account <Link to={"/register"} className='ms-2'>SignUp</Link>
            </p>

      {/* form ended here  */}
            </form>
         </div>
      </div>
   )
}

export default Login