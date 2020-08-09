import React from 'react';
import Lottie from 'lottie-react-web'
import animation from './ai.json'
 
const AI = () => (
  <Lottie
    width='500px'
    options={{
      animationData: animation
    }}
  />
)
 
export default AI