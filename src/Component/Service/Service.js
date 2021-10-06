import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import './service.css'

const Service = () => {
//useState
const [services,setservice]=useState([]);
//Use Effect and load data in fetch
useEffect(()=>{
fetch('./Service.json')
.then(res=>res.json())
.then(data=>setservice(data))
},[])
    return (

     <div>
         <h3 className='bg-warning p-5'>Our-services:</h3>
            <div className='service '>
                {/* map use */}
           
           {
               services.map(service=><Data id={service._id} service={service}></Data>)
           }
       </div>
     </div>
    );
};

export default Service;