import React from 'react'
import {Helmet} from "react-helmet";


export default function SEO(props) {
    return (
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <link rel="canonical" href={`https://www.zeptron.co/${props.path}`} />
            </Helmet>
         </div>)
    
}