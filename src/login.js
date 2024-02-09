import React, { useState } from 'react'
import axios from "axios";
import "./login.css"
const Login = () => {
  const [email,setemail ]=useState()
  const [password,setpassword ]=useState()
    const save=async()=>{
    // console.log(email,password)
    try {
        const LoginUser = await axios.post("http://localhost:7000/login",{
             email,
            password
        })
        console.log(LoginUser.data)
        
    } catch (error) {
        console.log(error);
    }
    }

    return (
        <div>

            <div class="img-a">
                <div class="mmm">
                   
                    <div>Email</div>
                    <input type="text" name='email'onChange={(e)=>{
                        setemail(e.target.value)
                    }}  />


                    <div>Password</div>
                    <input type="password" id='pwd' name='password'onChange={(p)=>{
                        setpassword(p.target.value)
                    }} />


                    <div className="save">
                        <button type="button"  className="btn btn-primary px-3" onClick={(s)=>{
                            save()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Login