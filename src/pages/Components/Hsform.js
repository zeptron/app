import React from 'react'
import HubspotForm from 'react-hubspot-form'

export default function Hsform(){

    return (
        <HubspotForm
   portalId='8267738'
   formId='8d1fbad2-29bd-436b-926b-65b87188d98d'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />
    )
}
