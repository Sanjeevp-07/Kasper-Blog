import React from 'react';
import heroImage from '../assets/hero.png'; // replace with your image
import '../Style/ArticleCard.css';

const ArticleCard = () => {
  return (
    <article>
      <img src={heroImage} alt="Migration" className='hero-iamge' />
      <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.6' }} className='desc'>
        <strong className='capitalM'>M</strong>Moving your team to Linear means embracing a faster, more focused way of managing projects. With its clean design, powerful workflows, and lightning-fast performance, Linear helps teams work smarter and ship faster. In this guide, we'll walk you through the essentials of making a smooth, efficient migration to Linear — so you can leave behind the clutter and start fresh with a system built for modern teams.
      </p>
    </article>
  );
};

export default ArticleCard;
