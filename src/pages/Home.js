import React from 'react'
import UserContext from '../UserContext'
import Hero from './Components/Hero'
import Below from './Components/Below'
import Provision from './Components/Provision'
import Configure from './Components/Configure'
import Stream from './Components/Stream'
// import Results from './Results'
// import Pricing from './Pricing'
import Start from './Components/Start'
import Privacy from './Components/Privacy'
import Studio from '../app/Studio/Index'
import Image from '../assets/bg4.jpg'
import CCTV from '../assets/Router_alt.png'
import ImgLeft from './Components/ImgLeft'

class Home extends React.Component {

  static contextType = UserContext

  render() {
    
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    
    return (
      <div>
        {
          isAuthenticated ? (
            
            <>
            <Studio/>
            </>
            ) : (
            <div>
            <Hero
            header="Deploy vision AI now"
            subheader="Add AI to new & existing video streams in seconds using Zeptron's plug-and-play solutions"
            bgImage={`url('${Image}')`}
            />
            <ImgLeft
            header="Connect your CCTV streams"
            subheader="Zeptron's CCTV router plugs into your NVR controller and overlays AI to your CCTV"
            img={CCTV}
            />
          
            <Stream/>
            <Configure/>
            <Provision/>
            <Below/>
            <Start/>
            </div>
          )
        }
      </div>
    )
  }
}




export default Home