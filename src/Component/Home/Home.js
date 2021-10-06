import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import HomeData from '../HomeData/HomeData';
import Service from '../Service/Service';
import './Home.css'


const Home = () => {
    //useState use
    const [home,sethome]=useState([]);
    //useEffect and fetch use
    useEffect(()=>{
        fetch('./Service.json')
        .then(res=>res.json())
        .then(data=>sethome(data.slice(0,4)))
    },[])
    return (
        
        <div>
             <h3 className='bg-warning p-5 '>Our-Home-Page</h3>
            
            
           <div className='grid'>
               {/* map */}
           {
                home.map(homedata=><HomeData id={homedata._id} homedata={homedata}></HomeData>)
            }
           </div>
            <Service></Service>
            <About></About>
            <Blog></Blog>
        </div>
    );
};

export default Home;