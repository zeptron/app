import React from 'react'
import UserContext from '../UserContext'
import Hero from './Components/Hero'
import Below from './Components/Below'
import Provision from './Components/Provision'
import Configure from './Components/Configure'
// import Results from './Results'
// import Pricing from './Pricing'
import Start from './Components/Start'
import Spacer from 'react-spacer'
import Studio from '../app/Studio/Index'
import Image from '../assets/bg4.jpg'
import CCTV from '../assets/Router_alt.png'
import Stream from '../assets/camx.png'
import ImgLeft from './Components/ImgLeft'
import ImgRight from './Components/ImgRight'
import Hubspot from './Components/Hubspot'

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
            subheader="Zeptron's CCTV router plugs into your NVR/DVR and overlays AI on your CCTV"
            img={CCTV}
            button="See Demo"
            />
            <ImgRight
            header="Set up new video streams with Ultra-HD cameras"
            subheader="Camera body is 3D printed with ethernet, 802.11 bgn wireless, and GPIO pins"
            img={Stream}
            button="See Demo"
            />
          <Spacer height="50px"/>
            {/* <Stream/> */}
            <Configure/>
            <Provision/>
            <Below/>
            <Start
            form={
              <Hubspot
                meetcode="/meeting-def"
              />
            }
            />
            </div>
          )
        }
      </div>
    )
  }
}




export default Home