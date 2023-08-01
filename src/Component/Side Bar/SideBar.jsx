/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SideBar.css'
const SideBar = ({ other }) => {
    return (
        <section>
            <div className='side-friendbar d-flex align-items-center '>
                <div className='position-relative'>
                    <img src={other.profile_img} alt="" />
                    <span className="position-absolute-active border border-light rounded-circle bg-danger-active p-2"><span className="visually-hidden">unread messages</span></span>
                </div>
                <p className='p-2'>{other.name}</p>
              
            </div>
        </section>
    );
};

export default SideBar;