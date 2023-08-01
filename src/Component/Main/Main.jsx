/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import'./Main.css';
import MainBar from '../main bar/MainBar';
import Story from '../Story/Story';
import logo from "../../images/ratul bg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faHome,faPlay,faUserFriends,faBars} from '@fortawesome/free-solid-svg-icons'
import SideBar from '../Side Bar/SideBar';
const Main = () => {
    const [others,setOthers]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setOthers(data))
    },[])
    return (
        <section className='container main mt-3'>
         <div className='sidebar d-flex flex-column align-items-start'>
          <div className='d-flex sidebar-icon align-items-center btn'>
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          <h6 className='ms-2'>Home</h6>
          </div>
          <div className='side-img d-flex mt-4 align-items-center btn'>
          <img src={logo} alt="" />
          <h6 className='ms-2'>A S Ratul</h6>
          </div>
          <div className='d-flex  mt-4 align-items-center sidebar-icon btn'>
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
            <h6 className='ms-2'>Watch</h6>
          </div>
          <div className='d-flex mt-4  sidebar-icon align-items-center btn'>
            <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
            <h6 className='ms-2'>Friends</h6>
          </div>
          <div className='d-flex mt-4  sidebar-icon align-items-center btn'>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            <h6 className='ms-2'>See All</h6>
          </div>
         </div>
         <div className='main-site'>
       <div className='d-flex align-items-center justify-content-start px-auto'>
      <div className='position-relative-img card-story img'>
      <img src={logo} alt="" />
     <div className='position-absolute-icon'>
     <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
     </div>
      </div>
       {
            others.map(other => <Story  other={other} key={other.post_id}></Story>)
          }
       </div>
         {
            others.map(other => <MainBar other={other} key={other.post_id}></MainBar>)
          }
         </div>
         <div className="side-2 mt-5">
         {
            others.map(other => <SideBar other={other} key={other.post_id}></SideBar>)
          }
         </div>
        </section>
    );
};

export default Main;