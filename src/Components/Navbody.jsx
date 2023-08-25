import React from "react";

// parent
//    left
//       that dot dot patter
//    right
//       a div

const Navbody = () => {
  return (
    <div className="navbody">
      <div className="left">
        <div className="pattern"></div>
      </div>
      <div className="right">
        <img
          className="home-image"
          src="https://lh3.googleusercontent.com/-8VP4dpTGP_o/V6alSFEK0kI/AAAAAAABcb8/vEsdwq_Hqi0/s0/black-zen-living-room-outer-backyard.jpg"
          alt=""
        />
        <div className="overlay-transparent-card">
          <h1 className="overlay-card-header">
            We help you make modern interior
          </h1>
          <p className="overlay-card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed
            modi obcaecati sint odio, voluptatem minus atque veritatis labore a
            ab, id necessitatibus architecto. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequuntur libero eum praesentium
            sapiente. Harum, molestiae laborum. Dignissimos eos quod nemo
            corporis nobis quo mollitia!
          </p>
        </div>
        <div className="overlay-transparent-arrow"></div>
      </div>
    </div>
  );
};

export default Navbody;
