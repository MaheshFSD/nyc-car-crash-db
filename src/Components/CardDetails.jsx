import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
const CardDetails = (props) => {
    console.log(props)
    let {collision_id,crash_date,vehicle_type_code1,vehicle_type_code2,crash_time,number_of_persons_killed}=props.location.state.data
    let {id}=useParams()
    // console.log("id is ----- ",id)
    return (

        <div className="col-sm-4 my-2" >
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body" style={{cursor:"pointer"}}>
                <h5 className="card-title text-center h2">Accident-Id : {collision_id}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">Day - {crash_date}</h6>
                <p className="card-text">Time - {crash_time}</p>
                <p className="card-text">Vehicle Type 1 - {vehicle_type_code1}</p>
                <p className="card-text">Vehicle Type 2 - {vehicle_type_code2}</p>
                <p className="card-text">Number_of_casualities - {number_of_persons_killed}</p>
                <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>

    )
}

export default CardDetails
