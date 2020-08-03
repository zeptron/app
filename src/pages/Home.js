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
import Image from '../../assets/cctv.jpg'

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
            header="Deploy AI in under 60 seconds"
            subheader="Zeptron makes it easy to deploy and manage computer vision software"
            bgImage='url(https://zepappassets.s3-ap-southeast-2.amazonaws.com/bg.jpg)'
            />
            <Privacy
            header="Consume existing video streams"
            subheader="Use Zeptron on your existing CCTV network, IP Cameras, or wired hardware"
            asset={<img src={Image} style={{maxWidth: '100%'}}/>}
            />
            <Stream/>
            <Configure/>
            <Provision/>
            {/* <Results/> */}
            {/* <Privacy/> */}
            {/* <Pricing/> */}
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