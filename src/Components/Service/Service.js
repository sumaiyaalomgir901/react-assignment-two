import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, body, pricing } = props.service;
  return (
    <div className="service">
      <h2>Name: {name}</h2>
      <h1>$ {pricing}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Service;
