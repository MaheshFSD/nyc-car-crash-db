import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Link to='/cars'><Button>See NYC Car Crash Details</Button></Link>
        </div>
    )
}

export default Home
