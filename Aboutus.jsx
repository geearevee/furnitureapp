import React from "react";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutusheader">
        <h2>ABOUT US</h2>
        <button className="learnmore">Learn More</button>
      </div>
      <div className="aboutusbody">
        <div className="leftaboutus">
          <div>
            <h2 className="numbers">1.</h2>
            <h3 className="aboutussubheading">Who are we</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              consequuntur deleniti dolorem explicabo dolore ipsa ad voluptatem
              eius eos dicta, tenetur porro aspernatur sequi quibusdam atque
              placeat molestias sunt doloremque.
            </p>
          </div>
          <div>
            <h2 className="numbers">2.</h2>
            <h3 className="aboutussubheading">What do we do</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              consequuntur deleniti dolorem explicabo dolore ipsa ad voluptatem
              eius eos dicta, tenetur porro aspernatur sequi quibusdam atque
              placeat molestias sunt doloremque.
            </p>
          </div>
          <div>
            <h2 className="numbers">3.</h2>
            <h3 className="aboutussubheading">How do we help</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              consequuntur deleniti dolorem explicabo dolore ipsa ad voluptatem
              eius eos dicta, tenetur porro aspernatur sequi quibusdam atque
              placeat molestias sunt doloremque.
            </p>
          </div>
          <div>
            <h2 className="numbers">4.</h2>
            <h3 className="aboutussubheading">Create Successful Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              consequuntur deleniti dolorem explicabo dolore ipsa ad voluptatem
              eius eos dicta, tenetur porro aspernatur sequi quibusdam atque
              placeat molestias sunt doloremque.
            </p>
          </div>
        </div>
        <div className="rightaboutus">
          <img
            src="https://img.freepik.com/premium-photo/modern-vintage-interior-living-room-blueprint-home-decor-concept-green-couch-with-marble-table-blue-wall-hardwood-flooring-3d-render_33739-489.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
