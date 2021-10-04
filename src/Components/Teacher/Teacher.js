import React from "react";
import "./Teacher.css";

const Teacher = (props) => {
  const { name, gender, designation, email, picture, phone, address } =
    props.teacher;
  return (
    <div className="teacher">
      <h2>Name: {name}</h2>
      <h4>Designation: {designation}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default Teacher;
