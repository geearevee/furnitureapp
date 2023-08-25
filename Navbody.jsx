import React from "react";

const Navbody = () => {
  return (
    <div className="navbody">
      <div className="left">
        <div className="pattern"></div>
      </div>
      <div className="right">
        <img
          className="home-image"
          src="https://s3.us-west-2.amazonaws.com/modsy/rimg/tr_c57f1b76-201c-441e-ba00-1bbe8514c74a_776827_2_elsie_userview_1.jpg"
          alt=""
        />
        <div className="overlay-transparent-card">
          <h1 className="overlay-card-header">
            We help you Make Modern Interior
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
