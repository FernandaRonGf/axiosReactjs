import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Card(props) {
  return (
      
   props.photos ? props.photos.data.map(photo => {
          return(
<div>
  <div className="row" style={{display:'flex'}}>
      <div className="card col" style={{ width: "18%" }}>
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          {photo.title}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
    </div>)
      }) : null 
    
  )
}
