import React from "react";
import image from '../pages/images/girl.png'
import ModalForm from "./try";

const Home=()=>{
    return(
        <>
        
       
<div className="container" style={{paddingTop:'1rem'}}>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" style={{textDecoration:'none',color:'black'}}>Home</a></li>
    <li class="breadcrumb-item"><a href="#" style={{textDecoration:'none',color:'black'}}>Courses</a></li>
    <li class="breadcrumb-item active" aria-current="page">Introduction to machine learning</li>
  </ol>
</nav>


{/* first card */}
<div class="card">
  <div class="card-body" style={{
      color:'white', paddingTop:'4rem', paddingLeft:'3rem',
      backgroundImage: `linear-gradient(to right, #212B39, #404348)`
      }} >
      <div className="row">
          <div className="col-6">
    <h2 class="card-title ">Introduction to Machine Learning</h2>
    <p class="card-text">Free Certification course of Machine Learning</p>
    <p class="card-text">Created By:<span style={{color:'tan'}}> Ritesh Singh</span></p>
    <p class="card-text">Course Duration:<span style={{color:'tan'}}> 1 Week</span></p>
    
    <div className="row" style={{paddingTop:'2rem'}}>
        <div className="col-6 display-3" style={{color:'tan'}}>Free</div>
        <div className="col-6" style={{alignItems:'center', textAlign:'center', paddingTop:'1rem'}}>
            <p>Ratings</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>2510 Ratings | 4786 Enrollments</p>
            </div>
    </div>
    <div className="" style={{paddingTop:'0rem', }}>
      <ModalForm/>
    </div>
    </div>
    <div className="col-6" style={{alignItems:'center',textAlign:'center'}}>
        <img src={image} height="500" style={{justifyContent:'flex-end'}}></img>
    </div>
    </div>
  </div>
</div>

{/* semi card */}
<div style={{position:'absolute', justifyContent:'center',alignItems:'center', alignSelf:'center', }}>
<div class="card" style={{width:'60rem',border:'none'}} >
<div className="row">
  <div className="col-6">
    
  <div class="card-body" style={{paddingLeft:'2rem'}}>
    <h5 class="card-title display-6">Includes</h5>
      <ul style={{listStyleType:'square'}}>
        <li>Concept videos</li>
        <li>Concept videos</li>
        <li>Concept videos</li>
      </ul>
  </div>
  </div>
  <div className="col-6" >
  <div class="card-body">
    <h5 class="card-title display-6">What will i learn?</h5>
      <ul>
        <li>introduction to machine learning</li>
        <li>Basic concepts of machine learning</li>
        <li>Linear Regression polymer</li>
      </ul>
  </div>
    </div>
</div></div></div>


</div>
        </>
    )
}

export default Home