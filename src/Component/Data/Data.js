
import React from 'react';
import './Data.css'

const Data = (props) => {
    //destructuring
    const {img,name,price,duration,Location}=props.service;
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

export default Data;