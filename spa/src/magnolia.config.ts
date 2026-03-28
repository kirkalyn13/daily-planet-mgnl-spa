import { MagnoliaConfig } from '@magnolia/react-editor';

import Home from './app/templates/pages/Home/Home';
import General from './app/templates/pages/General/General';
import Folder from './app/templates/pages/Folder/Folder';
import Article from './app/templates/pages/Article/Article';
import ArticleList from './app/templates/pages/ArticleList/ArticleList';

import Hero from './app/templates/components/Hero/Hero';
import LinkList from './app/templates/components/LinkList/LinkList';
import ListItem from './app/templates/components/ListItem/ListItem';
import RichText from './app/templates/components/Text/RichText';
import TextWithImage from './app/templates/components/TextWithImage/TextWithImage';
import FeaturedArticle from './app/templates/components/FeaturedArticle/FeaturedArticle';

export const config: MagnoliaConfig = {
  componentMappings: {
    // Page Templates
    'daily-planet-lm:pages/home': Home,
    'daily-planet-lm:pages/general': General,
    'daily-planet-lm:pages/folder': Folder,
    'daily-planet-lm:pages/article': Article,
    'daily-planet-lm:pages/article-list': ArticleList,

    // Component Templates
    'daily-planet-lm:components/hero': Hero,
    'daily-planet-lm:components/rich-text': RichText,
    'daily-planet-lm:components/text-with-image': TextWithImage,
    'daily-planet-lm:components/link-list': LinkList,
    'daily-planet-lm:components/list-item': ListItem,
    'daily-planet-lm:components/featured-article': FeaturedArticle
  },
};
