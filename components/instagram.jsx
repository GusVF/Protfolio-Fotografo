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
    <div className="container max-w-[1240px] text-center py-24">
      <p className="text-2xl font-bold">Clique na foto para me seguir no instagram </p>
      <p className="pb-4">@seuInstagram</p>
        <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          <InstagramImg socialImg={IgImg1} />
          <InstagramImg socialImg={IgImg2} />
          <InstagramImg socialImg={IgImg3} />
          <InstagramImg socialImg={IgImg4} />
          <InstagramImg socialImg={IgImg5} />
          <InstagramImg socialImg={IgImg6} />
        </div>
    </div>
  );
};

export default Instagram;
