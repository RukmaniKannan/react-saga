import React,{useEffect} from 'react'
import './Readsaga.css';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from "formik";

// import { userContext } from './UserContext'
import { CreateFetchAction } from "../Redux/Action/CreateFetchAction";
import {CreateDeleteAction} from "../Redux/Action/CreateDeleteAction"; 
// import { CreateUpdateAction } from "../Redux/Action/CreateUpdateAction";
import { useNavigate } from "react-router-dom";


const ReadSaga = () => {
  const navigate=useNavigate()
 const dispatch=useDispatch()
 useEffect(()=>{
  dispatch(CreateFetchAction());
  },[])
  
  const response = useSelector((state) => state.createFetch)
  const {loading,data:userData}=response
//  const userData = response?.data 
 console.log("response",userData);


 console.log("userData",userData);


 const handleDelete=(id)=>{
  dispatch(CreateDeleteAction(id));
 }

const handleUpdate = (val) => {
  navigate('/update', { state: { user:val } });
};


  return (

   <>
    <h1>ReadPages</h1>
   {
    loading?(<h2>loading....</h2>):(
        
   <div className='table-sm'>
   <table className='table-bordered'>
   <thead className='text-primary'>
       <tr>
       <th>UserName</th>
       <th>MobileNo</th>
       <th>Gender</th>
       <th>Language</th>
        <th>Update</th>
       <th>Delete</th>
       </tr>
   </thead>
   {/* <tbody>
      {
        response.map((item ,index)=>(
           <tr key={item.id}>
              <td>{item.userName} </td>
              <td>{item.mobileNo} </td>
              <td>{item.language} </td>
              <td>{item.gender} </td>
           </tr>
        ))
      }
   </tbody> */}
    <tbody>
         {userData.map((val) => (
           <tr key={val.id}>
             <td>{val.userName} </td>
             <td>{val.mobileNo} </td>
             <td>{val.gender} </td>
             <td>{val.language} </td>
              <td><button className='btn btn-danger' onClick={()=>handleDelete(val.id)} >Delete</button></td> 
              <td><button className='btn btn-success' onClick={()=>handleUpdate(val)}>Update</button></td> 
           </tr>
         )
         )}

       </tbody>
 
  </table> 
  </div>
    )
   }

   </>
  )
}

export default ReadSaga