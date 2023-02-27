import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className=" container home-container">
      <h1>Welcome to our Recipe Store!</h1>
      <section>
        <article>
          <img src="../src/assets/fullsizeoutput.jpeg" alt="chicken"  className="w-75"/>
          <p>We have the most delicious recipes for you to serve!</p>
          <Link to={"/card"}>
            <button className="btn btn-primary more-btn">Show Recipes</button>
          </Link>
        </article>
        <article>
          <img src="../src/assets/images (2).jfif" alt="location"  className="w-75"/>
          <p>We are here for more than about five years</p>
          <Link to={"/about"}>
            <button className="btn btn-primary more-btn">Show About</button>
          </Link>
        </article>
        <article>
          <img src="../src/assets/contact.jfif" alt="contact" className="w-75"/>
          <p>We also here for being ready to solve all your problems and suggestions keep in touch with you.. </p>
          <Link to={"/contact"}>
            <button className="btn btn-primary more-btn">Make Contact</button>
          </Link>
        </article>
      </section>
      <button className='btn btn-info'><a href="#">Back to Top</a></button>
    </div>
  );
};

export default Home;
