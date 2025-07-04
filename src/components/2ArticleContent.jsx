import React from 'react';
import '../Style/2ArticleContent.css';

import ux_image from '../assets/ux image.png';
import ux_image2 from '../assets/unsplash_XEgrO5XAM04.png';
import ux_image3 from '../assets/unsplash_XEgrO5XAM04 (1).png';

const ArticleContent = () => {
  return (
    <div className="article-content">

      <img src={ux_image} alt="Hero" className="main-image2" />

      <p className="intro">
        <span className="drop-cap">A</span> UX review is much more than simply spotting design mistakes — it’s about truly understanding how real users interact with a product. It’s about stepping into the user’s shoes, seeing where they hesitate, where they get confused, and where they find delight. A well-executed UX review looks beyond surface-level design and dives deep into the overall user journey, aiming to create experiences that feel effortless and intuitive.
      </p>

      <div className="split-section">
        <img src={ux_image2} alt="Sub" className="split-image" />
        <p>
          In a comprehensive UX review, we assess various critical elements such as navigation flows, screen layouts, interaction points, content clarity, and visual hierarchy. We identify friction points — <strong>moments where users struggle or drop off</strong> — and uncover opportunities to make their experience smoother and more satisfying. This evaluation also highlights what’s working well, so teams can build on strengths while correcting weaknesses.
        </p>
      </div>
      <div className='split-section2'>
        <p className='left_para'>
          Clear and thoughtful representation of UX review findings is essential. It’s not enough to simply gather data; insights must be organized and presented in a way that tells a story. Through user journey maps, annotated wireframes, experience flow diagrams, and prioritized recommendation lists, teams can visually understand the user’s experience at each touchpoint. This visualization bridges the gap between research findings and actionable design decisions.
        </p>

        <img src={ux_image3} alt="Sub 2" className="final-image" />
      </div>


            <h2 className="section-heading">
        Effective UX review representation empowers teams to:
      </h2>

      <ul className="section-list">
        <li>Visualize the entire user journey clearly.</li>
        <li>Understand where users face frustration or confusion.</li>
        <li>Prioritize improvements based on user needs and business goals.</li>
        <li>Align cross-functional teams (designers, developers, product managers) around a shared vision.</li>
        <li>Drive product iterations that are grounded in real user behavior rather than assumptions.</li>
      </ul>

      <p className="section-para">
        By investing time in presenting a UX review properly, designers ensure that insights are not lost in translation. It helps <strong>leadership, stakeholders, and team members</strong> to make informed decisions, advocate for user-centered design changes, and continuously improve the product.
      </p>

      <p className="section-para">
        In the end, a well-represented UX review transforms a product from being just functional to being truly delightful — <strong>creating experiences that users love, remember, and return to.</strong>
      </p>


    </div>
  );
};

export default ArticleContent;
