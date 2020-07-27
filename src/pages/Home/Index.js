import React from 'react'
import UserContext from '../../UserContext'
import Hero from './Hero'
import Below from './Below'
import Provision from './Provision'
import Configure from './Configure'
import Stream from './Stream'
// import Results from './Results'
// import Pricing from './Pricing'
import Start from './Start'
import Privacy from './Privacy'
import Studio from '../../app/Studio/Index'

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
            <Hero/>
            <Privacy/>
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