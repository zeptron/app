import React from 'react'

export default class Hubspot extends React.Component {
    componentWillMount(){
        this.loadScheduler();
      }
      
      loadScheduler() {
        const script = document.createElement("script")
        script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {this.setState({ scriptLoaded: true })}
      }
      
      render() {
         {
          return(
          <div>
            <iframe src={`https://meetings.hubspot.com/${this.props.meetperson || 'jason940'}${this.props.meetcode || ''}?embed=true`} maxWidth="600" height="600"></iframe>
          </div>
          )
        }
      }
    };