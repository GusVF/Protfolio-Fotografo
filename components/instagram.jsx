import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import InstagramImg from './instagramImg';


const Instagram = () => {
  return (
    <div>
      <p>Follow me on isntagram</p>
      <p>@seuInstagram</p>
      <div>
        <InstagramImg socialImg={IgImg1}/>
      </div>
    </div>
  );
};

export default Instagram;
