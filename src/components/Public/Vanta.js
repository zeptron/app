import React from 'react'
import * as THREE from 'three'
import DOTS from 'vanta/dist/vanta.dots.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class Vanta extends React.Component {
  constructor(props) {
    super(props)
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = DOTS({
      el: this.vantaRef.current,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      {this.props.children}
    </div>
  }
}
export default Vanta