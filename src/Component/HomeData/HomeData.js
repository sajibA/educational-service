import React from 'react';
import './HomeData.css'

const HomeData = (props) => {
    //destructuring use
    const {img,name,price,duration,Location}=props.homedata;
    return (
        <div className='services'>
            
        <div className='image'>
            <img src={img} alt="" />
        </div>
        <div>
            <p>Course Name:{name}</p>
            
            <p>Duration:{duration}</p>
            <p>Location:{Location}</p>
            <h3>Price:{price}</h3>
            
            
        </div>
        <button className='btn btn-primary '>Add To Cart</button>
        
    </div>
    );
};

export default HomeData;