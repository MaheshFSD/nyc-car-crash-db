import { Link, useHistory,Redirect } from "react-router-dom"

function CarCard(props) {
    let { collision_id, crash_date, vehicle_type_code1,vehicle_type_code2,crash_time } = props
    let id=collision_id
    // let history=useHistory()
    // function handleClick(){
    //     history.push(`/cars/:${id}`)
    // }
    return (
        <div className="col-sm-4 my-2" >
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body">
            <Link style={{textDecoration:"none",color:"#333",cursor:"pointer"}} to={{pathname:`/cars/${id}`,state:{data:props}}}>
                <h5 className="card-title text-center h2">Accident Id - :{collision_id}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">Accident happened On: {crash_date}</h6>
                <p className="card-text"><b>Crash Time - </b>{crash_time}</p>
                <p className="card-text"><b>Car 1 - </b> {vehicle_type_code1}</p>
                <p className="card-text"><b>Car 2 - </b>{vehicle_type_code2}</p>
            </Link>
        </div>
      </div>
    </div>
    )
  }
  
  export default CarCard
  