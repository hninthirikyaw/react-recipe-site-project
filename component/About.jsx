import React from "react";
import "../src/App.css";

const About = () => {
  return (
    <div className="container about-container">
      <aside className="history mb-3">
        <h2 className="mb-3">Our Little Recipe Store History</h2>
        <details className="mb-3">
          <summary>Do you know where our first place was?</summary>
          Actually, we started as a small online business and now it's become a
          little big increased as a store. You can learn details about the
          recipes on <a  href="https://en.wikipedia.org/wiki/Recipe">Wikipedia</a>
        </details>
      </aside>
      <div className="about mb-3">
        <img src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_bonappetit.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1421082500/bonappetit_cook-like-a-pro-perfecting-the-meatball-with-the-chefs-behind-the-meatball-shop.jpg" alt="meatball" className="w-50 rounded"/>
        <h2>
          About our <abbr title="Little Recipe Store">LRS</abbr>
        </h2>
        <p>
          Our <abbr title="Little Recipe Store">LRS</abbr> was first built since
          2008 by <strong>recipe lovers</strong> 🍔🍔 <br /> And we only care
          about customers' right and our product quality. <br />
          We promie that our service will be pleasant to you all. <br /> Have a
          great day, my lovely customers.
        </p>
      </div>

      <hr />

      <div className="store-hours my-3">
        <h3>Our Store Hours</h3>
        <dt>Form Monday to Saturday</dt>
        <dd>8am to 5pm</dd>
      </div>
      {/* <button className="btn btn-info">
        <a href="#">Back to Top</a>
      </button> */}
    </div>
  );
};

export default About;
