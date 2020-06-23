import React from 'react'
import UserContext from '../../UserContext'
import Hero from './Hero'
import Below from './Below'
import Results from './Results'
import Pricing from './Pricing'
import Start from './Start'
import Library from '../../app/Lib'

class Home extends React.Component {

  static contextType = UserContext

  render() {
    
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    
    return (
      <div>
        {
          isAuthenticated ? (
            
            <>
            <Library/>
            </>
            ) : (
            <div>
            <Hero/>
            <Below/>
            <Results/>
            <Pricing/>
            <Start/>
            </div>
          )
        }
      </div>
    )
  }
}




export default Home