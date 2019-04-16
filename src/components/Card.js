import React, { Component } from 'react';

let cardStyle = {
  width: '25rem'
};
let logoStyle = {
  width: '300px'
};
const Card = props => (
  <div className="card" style={cardStyle}>
    <img className="card-img-top" style={logoStyle} src={props.logoUrl} alt={props.name} />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
      <a href={props.url} class="btn btn-primary">
        Visit {props.name}
      </a>
    </div>
  </div>
);

export default Card;
