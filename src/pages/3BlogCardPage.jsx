import BlogCard from '../components/3BlogCard';
import '../pages/3BlogCargPage.css';
import React from 'react';

import Img1 from '../assets/ux image.png';
import Img2 from '../assets/unsplash_ekDDL9YRX34 (1).png';
import Img3 from '../assets/unsplash_ekDDL9YRX34.png';

function BlogCardPage() {
  return (
     <div className="blog-grid-page">
      <div className="blog-grid">
        <BlogCard 
          image={Img1}
          category="Design"
          title="UX Review Presentations"
          description="How can you craft impactful presentations that engage your colleagues and leave a lasting impression on your manager?"
          author="Kathy Ruth"
          date="Jun 22, 2024"
        />

        <BlogCard 
          image={Img2}
          category="Product"
          title="Migrating to Linear 101"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="John"
          date="Jan 17, 2024"
        />

        <BlogCard 
          image={Img3}
          category="Software Engineering"
          title="Building your API Stack"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="Roy"
          date="Mar 03, 2024"
        />


        <BlogCard 
          image={Img1}
          category="Design"
          title="UX Review Presentations"
          description="How can you craft impactful presentations that engage your colleagues and leave a lasting impression on your manager?"
          author="Kathy Ruth"
          date="Jun 22, 2024"
        />

        <BlogCard 
          image={Img2}
          category="Product"
          title="Migrating to Linear 101"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="John"
          date="Jan 17, 2024"
        />

        <BlogCard 
          image={Img3}
          category="Software Engineering"
          title="Building your API Stack"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="Roy"
          date="Mar 03, 2024"
        />



        <BlogCard 
          image={Img1}
          category="Design"
          title="UX Review Presentations"
          description="How can you craft impactful presentations that engage your colleagues and leave a lasting impression on your manager?"
          author="Kathy Ruth"
          date="Jun 22, 2024"
        />

        <BlogCard 
          image={Img2}
          category="Product"
          title="Migrating to Linear 101"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="John"
          date="Jan 17, 2024"
        />

        <BlogCard 
          image={Img3}
          category="Software Engineering"
          title="Building your API Stack"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="Roy"
          date="Mar 03, 2024"
        />



        <BlogCard 
          image={Img1}
          category="Design"
          title="UX Review Presentations"
          description="How can you craft impactful presentations that engage your colleagues and leave a lasting impression on your manager?"
          author="Kathy Ruth"
          date="Jun 22, 2024"
        />

        <BlogCard 
          image={Img2}
          category="Product"
          title="Migrating to Linear 101"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="John"
          date="Jan 17, 2024"
        />

        <BlogCard 
          image={Img3}
          category="Software Engineering"
          title="Building your API Stack"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          author="Roy"
          date="Mar 03, 2024"
        />
      </div>
    </div>
  );
}

export default BlogCardPage;
