import React from "react";
import { Carousel } from "antd";

function Homepage() {
  return (
    <div>
      {/* <h1>Homepage</h1> */}
      <img
        src="../src/assets/background.jpg"
        alt="background_img"
        style={{
          display: "block",
          height: "100vh",
          width: "100%",
          marginTop: "-64px",
          marginBottom: "-61px",
          fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* <Carousel autoplay>
        <div>
          <img src="../src/assets/workplace.jpg" style={{width: '100vw', height: '100vh', display: 'block'}} />
        </div>
        <div>
          <img src="../src/assets/workplace1.jpg" style={{width: '100vw', height: '100vh', display: 'block'}}/>
        </div>
        <div>
          <img src="../src/assets/workplace2.jpg" style={{width: '100vw', height: '100vh', display: 'block'}}/>
        </div>
        <div>
          <img src="../src/assets/workplace3.jpg" style={{width: '100vw', height: '100vh', display: 'block'}}/>
        </div>
      </Carousel> */}
    </div>
  );
}

export default Homepage;
