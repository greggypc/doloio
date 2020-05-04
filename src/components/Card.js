import React, { Component } from 'react';

let cardStyle = {
  width: '25rem'
};
let logoStyle = {
  width: '300px'
};
const Card = props => (

          <div className="col-4">
            <span className="image fit">
            <img className="card-img-top" style={logoStyle} src={props.logoUrl} alt={props.name} />
            </span>
            <div className="card-body">
         <h2 className="card-title">{props.name}</h2>
         <p className="card-text">{props.description}</p>
         <a href={props.url} class="btn btn-primary">
           Visit {props.name}
        </a>
      </div>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  More
                </a>
              </li>
            </ul>
          </div>        
       
  // <div className="card" style={cardStyle}>
  //   <div class="card-body">
  //     <img className="card-img-top" style={logoStyle} src={props.logoUrl} alt={props.name} />
  //     <div className="card-body">
  //       <h2 className="card-title">{props.name}</h2>
  //       <p className="card-text">{props.description}</p>
  //       <a href={props.url} class="btn btn-primary">
  //         Visit {props.name}
  //       </a>
  //     </div>
  //   </div>
  // </div>
);

export default Card;
