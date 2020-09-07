import React from 'react'
import UserContext from '../UserContext'
import Hero from './Components/Hero'
import Below from './Components/Icons'
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
import ConfigureImg from '../assets/configure.png'
import ChartImg from '../assets/charts.png'
import NotificationImg from '../assets/notifications.png'
import Section from './Components/Section'

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
            header="Zeptron makes live video smart with AI"
            subheader="Add AI to CCTV in seconds for analytics and automation"
            />
            <Section
            />

            {/* <ImgLeft
            header="Connect CCTV in seconds"
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
            <ImgLeft
            img={ConfigureImg}
            header="Configure tracking and counting for detections"
            subheader="Get better analytics by setting up multi-directional counting with one click"
            button="See Demo"
            />
            <ImgRight
            img={NotificationImg}
            header="Receive notifications for detections that matter"
            subheader="Find out what you want to know when you want to know it with smart detection alerts"
            button="See Demo"
            />
            <ImgLeft
            img={ChartImg}
            header="Get real-time analysis of detection results"
            subheader="Zeptron automatically charts detections in real time and can offer results in CSV / JSON"
            button="Get Started"
            /> */}
          {/* <Spacer height="50px"/>
            {/* <Configure/>
            <Provision/> 
            <Below/> */}
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