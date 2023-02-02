import React, { useEffect, useState } from 'react'
import ShipmentDetails from './components/ShipmentDetails'
import { TRACKING } from './ShipmentTrackerInputAPI'

export default function ShipmentTrackInput() {
      const [number,setNumber]=useState()
    const [data,setData]= useState<any>("")
    useEffect( ()=>{
    console.log(data)
    },[data]
    )
    
  return (
    <div className="container" style={{display:"flex", justifyContent:"center", margin:"auto"}  }>
<div className="input-group mb-3" style={{maxWidth:"300px", margin: "auto", height: "100px", padding: "80px 0"}}>
  <input type="text" className="form-control"  value={number} onChange={(e: any) => setNumber(e.target.value)} placeholder="Tracking No." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append" onClick={()=> TRACKING(number).then((res)=> setData(res) ).catch(setData)}>
    <button className="btn btn-outline-secondary" type="button" > <i className="fa-solid fa-magnifying-glass"></i></button>
  </div>
  <br></br>
<ShipmentDetails CurrentStatus = {data?.CurrentStatus}
                error = {data?.error}
                number = {data?.TrackingNumber? data.TrackingNumber: number}/>

</div>
</div>
  )
}
