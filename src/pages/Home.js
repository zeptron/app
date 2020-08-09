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
            header="Deploy vision AI in seconds"
            subheader="Zeptron's plug-and-play solutions make it easy to deploy AI on new & existing video streams"
            bgImage={`url('${Image}')`}
            />
             <Below/>
            <Stream/>
            <Configure/>
            <Provision/>
            <Start/>
            </div>
          )
        }
      </div>
    )
  }
}




export default Home