import React, { useState } from 'react'
import "./Add.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Add = () => {
    const users={
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const [user,setUser]=useState(users)

    const navigate = useNavigate()


    const inputhandler=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})
        // console.log(user)
    }


    const submitForm=async (e)=>{
        e.preventDefault();
        await axios.post("https://curd-mernstack.onrender.com/create",user)
        .then((res)=>{
            toast.success("User created Successfully...")
            // console.log(res.data)
            navigate("/")
        }).catch((err)=>{
            console.log("Error: "+err)
        })
    }


  return (
    <div className='adduser'>
        <Link to={"/"}>Back</Link>
        <h3>Add New User</h3>
        <form onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" onChange={inputhandler} id='fname' name='fname' autoComplete='off' placeholder='Enter First Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" onChange={inputhandler} id='lname' name='lname' autoComplete='off' placeholder='Enter Last Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="text" onChange={inputhandler} id='email' name='email' autoComplete='off' placeholder='Enter Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="text" onChange={inputhandler} id='password' name='password' autoComplete='off' placeholder='Enter Password' />
            </div>
            <div className="inputGroup">
                <button>Add User</button>
            </div>
        </form>
    </div>
  )
}

export default Add
