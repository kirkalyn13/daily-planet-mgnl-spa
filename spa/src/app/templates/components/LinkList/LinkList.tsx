import { MgnlContent } from '@magnolia/frontend-helpers-base';
import ILinkListProps from './LinkList.model';
import Card from '../Card/Card';

const LinkList = ({ title, links = [] }: ILinkListProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-8 my-8 text-center">
      {title && (
        <p className="font-bold text-2xl my-8">
          {title}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((page: MgnlContent) => (
          <Card
            key={page["@id"]}
            title={page["title"]}
            publishDate={page["publishDate"]}
            heroImage={page["heroImage"]}
            description={page["description"]}
            path={page["@path"]}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkList;