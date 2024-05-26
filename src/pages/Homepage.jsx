import React from 'react';
import {Carousel} from 'antd';

const carouselStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '200px',
  textAlign: 'center',
  background: '#364d79',
  
};

function Homepage() {

  return (
    <Carousel autoplay>
      <div>
        <img src="../src/assets/workplace.jpg" alt="workplace" style={carouselStyle}/>
      </div>
      <div>
        <img src="../src/assets/workplace1.jpg" alt="workplace-1" style={carouselStyle}/>
      </div>
      <div>
        <img src="../src/assets/workplace2.jpg" alt="workplace-2" style={carouselStyle}/>
      </div>
      <div>
        <img src="../src/assets/workplace3.jpg" alt="workplace-3" style={carouselStyle}/>
      </div>
    </Carousel>
  );
}

export default Homepage;
