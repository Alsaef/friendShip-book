/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Story.css'
const Story = ({other}) => {
    return (
        <div className='img mx-1'>
           <img  src={other.profile_img} alt="" /> 
           
        </div>
    );
};

export default Story;