import React from "react";
import { Carousel } from "antd";

function Homepage() {
  return (
    <div>
      <div className="background-img">
        {" "}
        <img
          src="../src/assets/background.jpg"
          alt="background_img"
          style={{
            display: "block",
            height: "100vh",
            width: "100%",
            marginTop: "-64px",
            marginBottom: "-61px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="background-text" style={{ position: 'absolute', top: '30%', left: '20%', transform: 'translate(-50%, -50%)'}}>
          <h1 style={{color: 'white', fontFamily: 'Tangerine', fontSize: '40px'}}>Efficiency Redefined</h1>
        </div>
      </div>

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
