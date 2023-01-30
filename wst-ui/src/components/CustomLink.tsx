import { cloneElement, ReactElement } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

interface CustomLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactURL?: boolean;
}

export default function CustomLink({ children, shouldMatchExactURL = false, ...rest }: CustomLinkProps) {
  const { pathname } = useLocation();

  let isSelectedLink = false;

  if (shouldMatchExactURL && pathname === rest.to) {
    isSelectedLink = true;
  }

  if (!shouldMatchExactURL && pathname.startsWith(String(rest.to))) {
    isSelectedLink = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isSelectedLink ? 'inboxPurpleTint.900' : 'inboxBlueTint.900',
      })}
    </Link>
  );
}
