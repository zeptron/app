import React from 'react';
import Lottie from 'lottie-react-web'
import animation from './Brain.json'
 
const Brain = () => (
  <Lottie
    width='200px'
    options={{
      animationData: animation
    }}
  />
)
 
export default Brain