import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Articles.css';
import Post from '../Post/Post';

const Articles = (props) => {
  const { posts } = props;

  let carouselItems = [<div key="onLoad-1">Cikkek betöltése...</div>, <div key="onLoad-2">...folyamatban van.</div>];

  if (posts) {
    carouselItems = posts
      .sort((a, b) => b.id - a.id)
      .slice(0, 10)
      .map((post) => <Post key={post.uniqe} category={post.category} title={post.title} clicked={() => {}} />);
  }

  return (
    <Carousel showThumbs={false} showStatus={false} showArrows interval={5000} autoPlay infiniteLoop>
      {carouselItems}
    </Carousel>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Articles);
