import React from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { enrolled } from "../../services/api";
import Navi from './Navi.jsx'

import img from '../images/dash.png'

const Dashboard=()=>{

  useEffect(()=>{
    enrolledData()
},[])

const {token} = useParams()

const enrolledData=async()=>{
    const res = await enrolled(token)
    console.log('enrlled',res.token)
}
    return(
        <>
     <Navi/>
        <div  className="row">
          <div className="col-2"></div>
         
        <div class="col-10" >
        <h4 className="">Recent Activity</h4>
    <div class="card" style={{border:'none'}} >
      <div class="card-body">
      <img src={img} height="200" width="300" class="" alt="..."></img>
        <h5 class="card-title">Introduction to MachineLearning </h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div>
    
    
  </div>
        </div>
        </>
    )
}

export default Dashboard