import { MagnoliaConfig } from '@magnolia/react-editor';

import LinkList from './app/templates/components/LinkList/LinkList';
import ListItem from './app/templates/components/ListItem/ListItem';
import Text from './app/templates/components/Text/Text';
import TextImage from './app/templates/components/TextImage/TextImage';
import Basic from './app/templates/pages/Basic/Basic';

export const config: MagnoliaConfig = {
  componentMappings: {
    'daily-planet-lm:pages/basic': Basic,

    'daily-planet-lm:components/text': Text,
    'daily-planet-lm:components/textImage': TextImage,
    'daily-planet-lm:components/linkList': LinkList,
    'daily-planet-lm:components/listItem': ListItem,
  },
};
