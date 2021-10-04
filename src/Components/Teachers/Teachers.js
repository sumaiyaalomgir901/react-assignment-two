import React, { useEffect, useState } from "react";
import Teacher from "../Teacher/Teacher";
import "./Teachers.css";

const Teachers = (props) => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("./teacher.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div>
      <h1>Our Teachers</h1>
      <div className="teacher-area">
        {teachers.map((teacher) => (
          <Teacher key={teacher._id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
