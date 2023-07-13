import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const navigate = useNavigate();
   const [input, setInput] = useState({
      email: "",
      password: ""
    })
const handleLogin = (e) =>{
   e.preventDefault();
   const loggeduser = JSON.parse(localStorage.getItem("user"));
   if(input.email === loggeduser.email 
      && input.password === loggeduser.password)
   {
      localStorage.setItem("loggedin", true)
         navigate("/");
   } else
   {
      alert("Please Enter correct credentials");
   }
}
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
        <div className='form_container p-5 rounded bg-white'> 

       <form onSubmit={handleLogin} className='text-start fw-bold p-2'>

 <h3 className='text-center'>SignIn</h3>
 <div className='mb-3'>
 <label htmlFor="email" className="form-label">EMail</label>
 <input type="email" name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} className='form-control' autoComplete='off'/>
 </div>

 <div className='mb-3'>
 <label htmlFor="password" className="form-label">Password</label>
 <input type="password"  name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} className='form-control'/>
 </div>

 <div className='mb-3'>
    <input type="checkbox"  className='custom-control custom-checkbox' id='check'/>
    <label htmlFor="check" className='custom-input-label ms-2'>
        Remember Me
    </label>
 </div>
 <div className='d-grid'> 
<button className='btn btn-primary'>SignIn</button>
 </div>
 <div>
    <p></p>
 </div>
 <p className='text-end mt-3'>
    Not have any Account <Link to={"/register"} className='ms-2'>SignUp</Link>
 </p>
       </form>
       </div>
    </div>
  )
}

export default Login