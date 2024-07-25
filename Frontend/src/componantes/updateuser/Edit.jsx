import React, { useEffect, useState } from 'react'
import "../adduser/Add.css"
import { Link ,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const Edit = () => {
    const navigate=useNavigate()

    const users={
        fname:"",
        lname:"",
        email:"",
    }
    
  const {id}=useParams();

  const [user,setUser]=useState(users)

  const inputchangeHandler=async(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
  }


  useEffect(()=>{
   axios.get(`https://curd-mernstack.onrender.com/${id}`)
   .then((res)=>{
    // console.log(res.data)
    setUser(res.data)
   }).catch((err)=>{
    console.log(err)
   })
  },[id])

  const submitForm=async(e)=>{
    e.preventDefault();
    await axios.put(`https://curd-mernstack.onrender.com/update/${id}`,user)
    .then((res)=>{
        toast.success("Form Updated Successfully")
        navigate("/")
    }).catch(err=>{
        toast.error("Something want wrong")
    })

  }

  return (
    <div className='adduser'>
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" value={user.fname} onChange={inputchangeHandler} id='fname' name='fname' autoComplete='off' placeholder='Enter First Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" value={user.lname} onChange={inputchangeHandler} id='lname' name='lname' autoComplete='off' placeholder='Enter Last Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="text" value={user.email} onChange={inputchangeHandler} id='email' name='email' autoComplete='off' placeholder='Enter Email' />
            </div>
            <div className="inputGroup">
                <button>Update User</button>
            </div>
        </form>
    </div>
  )
}

export default Edit
