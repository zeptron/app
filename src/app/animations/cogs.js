import React from 'react';
import Lottie from 'lottie-react-web'
import animation from './Cogwheels.json'

const Cogs = () => (
  <div style={{ width: '100px', height: '100px' }}>
    <Lottie
      options={{
        animationData: animation
      }}
    />
  </div>
);

export default Cogs
