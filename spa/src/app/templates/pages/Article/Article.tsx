import { EditableArea } from '@magnolia/react-editor';
import Footer from '../../fragments/Footer';
import IArticleProps from './Article.model';
import Hero from '../../components/Hero/Hero';
import ArticleDetails from '../../fragments/Article/ArticleDetails';

const Article = ({ 
  title,
  main,
  footer,
  author,
  publishDate,
  readTime,
  heroImage,
  heroTitle,
  subtitle,
  description
}: IArticleProps) => {
  return (
    <div className='flex flex-col justify-between min-h-[calc(100vh-5rem)]'>
      {title && (
        <header className='hidden'>
          <h1 className='sr-only'>{title}</h1>
        </header>
      )}
      <Hero heroImage={heroImage} heroTitle={heroTitle} subtitle={subtitle} description={description} />
      <main className="w-full max-w-5xl mx-auto px-6 md:px-8 my-4">
        <ArticleDetails author={author} publishDate={publishDate} readTime={readTime}/>
        {main && <EditableArea content={main} />}
      </main>
      {footer && (
        <EditableArea
          className={'footer bg-black text-white px-8'}
          content={footer}
          customView={Footer}
        />
      )}
    </div>
  );
};

export default Article;
