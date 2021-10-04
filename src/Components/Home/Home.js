import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="top-home">
        <h1>Welcome to Our School</h1>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
