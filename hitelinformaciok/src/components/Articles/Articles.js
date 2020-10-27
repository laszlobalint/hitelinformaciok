import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import './Articles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { THUMBNAILS } from '../../shared/thumbnails';

const Articles = (props) => {
  const { posts, history } = props;

  let carouselItems = [<div key="onLoad-1">Cikkek betöltése...</div>, <div key="onLoad-2">...folyamatban van.</div>];

  if (posts) {
    carouselItems = posts
      .sort((a, b) => b.id - a.id)
      .slice(0, 10)
      .map((post, index) => (
        <div key={post.id}>
          <img src={THUMBNAILS[index]} alt={post.title} />
          <h3>{post.title}</h3>
        </div>
      ));
  }

  return (
    <div>
      <Carousel
        width={'400px'}
        showThumbs={false}
        showStatus={false}
        interval={6000}
        autoPlay
        infiniteLoop
        onClickItem={(index, item) => history.push(`/full-post/${item.key}`)}
      >
        {carouselItems}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(withRouter(Articles));
