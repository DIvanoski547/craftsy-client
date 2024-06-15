import React from "react";
import { Carousel } from "antd";

function Homepage() {
  return (
    <div>
      <Carousel autoplay>
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
      </Carousel>
    </div>
  );
}

export default Homepage;
