import React from "react";

const Navigation=()=>{
    const url = 'https://cdn.eckovation.com/college/imarticusb.svg'
    return(
        <>
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{position:'relative'}}>
  <div className="container" >
  <a className="navbar-brand" href="#">
      <img src={url} alt="" width="80" height="70"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav justify-content-end flex-grow-1 me-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex" >
          <a className="nav-link active" aria-current="page" href="#">I-ACE</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="#">Blog</a>
          </li>
      </ul>
   
    </div>
  </div>
</nav>
        </>
    )
}

export default Navigation