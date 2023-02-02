import React from 'react'
import { useTranslation } from 'react-i18next';
import { text } from 'stream/consumers'

export default function ShipmentDetails({CurrentStatus,error,number}) {
  const { t, i18n } = useTranslation();
  return (
    <div className = "container">
   
    <div style={{width:"100%", textAlign:'center'}}> 
    <div>Shipment No. {number}</div>
    <h3>{CurrentStatus?  t(CurrentStatus?.state) : null}</h3>
            {error? error : null}</div>
            </div>
  )
}
