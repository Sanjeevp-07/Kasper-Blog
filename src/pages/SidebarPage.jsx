import React from 'react';
import '../pages/SidebarPage.css';

import mainImage from '../assets/ux image.png'; // your large image
/* import userAvatar from '../assets/avatar.png'; */ // if you want real avatars

const SidebarPage = () => {
  return (
    <div className="sidebar-page">
      <div className="sidebar-grid">

        {/* Left large image */}
        <div className="main-image-container">
          <img src={mainImage} alt="Main Visual" className="main-image" />
        </div>

        {/* Right sidebar */}
        <div className="sidebar">

          <div className="categories-card">
            <h3>Categories</h3>
            <div className="category-buttons">
              <button>Headline</button>
              <button>Blogs</button>
            </div>
              <button className='category-buttons2'>List</button>
          </div>

          <div className="recent-posts-card">
            <h3>Recent Posts</h3>
            <hr />

            <div className="recent-post1">
              <img src={mainImage} alt="Post 1" className="recent-post-image" />
              <div>
                <p className="post-title">UX Review Presentations</p>
                <p className="post-date">Jun 22, 2024</p>
              </div>
            </div>

            <div className="recent-post">
              <img src={mainImage} alt="Post 2" className="recent-post-image" />
              <div>
                <p className="post-title">Migrating to Linear 101</p>
                <p className="post-date">Jan 17, 2024</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SidebarPage;
