import Header from '../components/Header';
import AuthorInfo from '../components/AuthorInfo';
import ArticleCard from '../components/ArticleCard';
import ArticleSection from '../components/ArticleSection';
import KeyPoints from '../components/KeyPoints';

import PreFooter from '../components/PreFooter';
import SocialFooter from '../components/2SocialFooter';



function BlogPages_1() {
  return (
    <div className="container">
      <Header />
      <AuthorInfo />
      <PreFooter />
      <ArticleCard />
      <ArticleSection />
      <KeyPoints />
       <SocialFooter />
    </div>
  );
}

export default BlogPages_1;
