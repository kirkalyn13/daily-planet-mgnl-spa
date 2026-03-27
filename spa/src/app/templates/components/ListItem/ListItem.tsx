import IListItemProps from './ListItem.model';

const Item = ({ label, url }: IListItemProps) => {
  return (
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative inline-block font-medium text-black
            after:absolute after:left-0 after:-bottom-0.5
            after:h-[2px] after:w-0 after:bg-black
            after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          {label}
        </a>
      </li>
    </ul>
  );
};

export default Item;
