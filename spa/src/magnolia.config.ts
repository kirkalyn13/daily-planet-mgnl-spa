import { MagnoliaConfig } from '@magnolia/react-editor';

import Home from './app/templates/pages/Home/Home';
import General from './app/templates/pages/General/General';
import Folder from './app/templates/pages/Folder/Folder';
import Article from './app/templates/pages/Article/Article';

import Hero from './app/templates/components/Hero/Hero';
import LinkList from './app/templates/components/LinkList/LinkList';
import ListItem from './app/templates/components/ListItem/ListItem';
import Text from './app/templates/components/Text/Text';
import TextImage from './app/templates/components/TextImage/TextImage';

export const config: MagnoliaConfig = {
  componentMappings: {
    // Page Templates
    'daily-planet-lm:pages/home': Home,
    'daily-planet-lm:pages/general': General,
    'daily-planet-lm:pages/folder': Folder,
    'daily-planet-lm:pages/article': Article,

    // Component Templates
    'daily-planet-lm:components/hero': Hero,
    'daily-planet-lm:components/text': Text,
    'daily-planet-lm:components/textImage': TextImage,
    'daily-planet-lm:components/linkList': LinkList,
    'daily-planet-lm:components/listItem': ListItem,
  },
};
