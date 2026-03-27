import Link from 'next/link';

const NavLink = ({
  href,
  children,
  className,
  isMagnoliaEdit = false,
}: {
  href: string;
  className?: string;
  children?: React.ReactNode;
  isMagnoliaEdit: boolean;
}) => {
  return (
    <Link
      href={href}
      className={className}
      onClick={isMagnoliaEdit ? (e) => e.preventDefault() : undefined}
      style={isMagnoliaEdit ? { pointerEvents: 'none' } : undefined}
      suppressHydrationWarning
    >
      {children}
    </Link>
  );
};

export default NavLink;