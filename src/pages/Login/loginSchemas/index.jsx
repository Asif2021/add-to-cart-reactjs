import React from 'react'


const Validation = (values) => {
let error = {}; 
   
if(!values.email){
    error.email = "Email is Required"
} else if(!values.password){
    error.password = "Password is Required"
} else if (values.password.length < 3){
    error.password = "Password must be more than 3 charachter"
}
return error;

}

export default Validation