import React, { Component } from 'react';

const Card = props => (
  <div>
    <img className="" alt={props.name} src={props.logoURL} />
    <h1>{props.name}</h1>
    <p>{props.description}</p>
  </div>
);

export default Card;
