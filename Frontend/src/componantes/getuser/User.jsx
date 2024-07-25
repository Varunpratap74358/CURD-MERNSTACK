import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './User.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const User = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get('https://curd-mernstack.onrender.com/getall')
        .then((res) => {
          setData(res.data)
          // console.log(res.data)
        })
        .catch((err) => {
          console.log('Error: ' + err)
        })
    }
    fetchdata()
  }, [])

  const deleteuser= async(userId)=>{
    await axios.delete(`https://curd-mernstack.onrender.com/${userId}`)
    .then((res)=>{
      setData((prevUser)=>prevUser.filter((user)=>user._id!==userId))
      toast.success("User Deleted Successfully...")
    }).catch((err)=>{
      toast.error("Something Want Wrong")
    })
  }


  const tableData = data.map((v, i) => {
    return (
      <tr key={i}>
        <td>{i+1}</td>
        <td>{v.fname} {v.lname}</td>
        <td>{v.email}</td>
        <td className="actionbutton">
          <button onClick={()=>deleteuser(v._id)}>
            Delete <i className="fa-solid fa-trash"></i>
          </button>
          <Link to={'/edit/'+v._id} className="editButton">
            Edit <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        </td>
      </tr>
    )
  })

  return (
    <div className="usertable">
      <Link to={'/add'} className="addbutton">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {tableData}
        </tbody>
      </table>
    </div>
  )
}

export default User
