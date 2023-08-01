/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './MainBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const LikeButton = ({ liked, toggleLike }) => {
  return (
    <button className={liked ? 'liked' : ''} onClick={toggleLike}>
      {liked ? <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>: <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>}
    </button>
  );
};

const MainBar = ({ other }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <section className='mt-2'>
        <Card className='p-2' style={{ width: '18rem' }}>
          <div className='d-flex align-items-center'>
            <div>
              <img className="profile-img" src={other.profile_img} alt="" />
            </div>
            <div className='px-2'>
              <h6><a href="" className='text-dark ankor'>{other.name}</a></h6>
            </div>
          </div>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <Card.Img variant="top" src={other.post_image} />
            </Card.Text>
            <div className='d-flex justify-content-around align-items-center'>
              <LikeButton  liked={liked} toggleLike={toggleLike} />
              <button className='btn fs-4'><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></button>
              <button className='btn fs-4'><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></button>
            </div>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default MainBar;
