import React from 'react'
import {Button} from 'react-bootstrap'
import { adddata } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Form=()=>{

        const [data, setData] = useState({
            name:'',
            phone:'',
            email:''
        })
const navigate= useNavigate()

        const handleChange=(e)=>{
            const name = e.target.name;
            const value = e.target.value
            setData({...data,[name]:value})
            console.log(data)
        }

        const handleSubmit=async()=>{
            alert('mail sent please check spam box ')
             await adddata(data)
        }

    return(
        <><div className='container'>
            <div className='display-6'>Fill Details</div>
        <form style={{paddingTop:'1rem'}}>
    <div className="form-group">
   
    <input type="text" required min="1" name='name' value={data.name} onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="FullName"></input>
    </div><br></br>
     <div className="form-group">
    
    <input type="number" required min="5" name="number" value={data.number} onChange={handleChange}  className="form-control" id="formGroupExampleInput2" placeholder="Mobile Number"></input>
     </div><br></br>
     <div className="form-group">
    
    <input type="text" required name="email" value={data.email} onChange={handleChange} className="form-control" id="formGroupExampleInput2" placeholder="Enter Email"></input>
     </div><br></br>
     <Button variant="success" onClick={()=>handleSubmit()} style={{justifyContent:'center'}}>Success</Button>
    </form>
    </div>
        </>
    )
}

export default Form