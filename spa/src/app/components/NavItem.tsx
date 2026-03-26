import { environment } from '@/environments/environment';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import NavLink from './NavLink';

const NavItem = ({
  content,
  nodeName,
  currentLanguage,
  isMagnoliaEdit,
}: {
  content: MgnlContent;
  nodeName?: string | null;
  currentLanguage: string;
  isMagnoliaEdit: boolean;
}) => {
  const baseName =
    currentLanguage === environment.languages[0] ? '' : '/' + currentLanguage;

  if (!content) {
    return null;
  }

  const children = content!['@nodes']?.map((name) => (
    <NavItem
      key={name}
      content={content[name] as MgnlContent}
      nodeName={nodeName}
      currentLanguage={currentLanguage}
      isMagnoliaEdit={isMagnoliaEdit}
    />
  ));

  return (
    <>
      <NavLink
        className="
          relative inline-block group
          navbar-item
        "
        href={baseName + content['@path'].replace(nodeName || '', '') || '/'}
        isMagnoliaEdit={isMagnoliaEdit}
      >
        <span>
          {(content.navigationTitle ||
            content.title ||
            content['@name']) as string}
        </span>

        <span
          className="
            absolute left-0 -bottom-1 w-0 h-[2px] bg-black
            transition-all duration-300 ease-out
            group-hover:w-full
          "
        />
      </NavLink>

      {children}
    </>
  );
};

export default NavItem;
