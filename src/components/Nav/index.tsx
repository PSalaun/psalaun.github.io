import { FunctionComponent } from 'preact';
import Styles from './styles.module.scss';

export type Route = '/' | '/portfolio' | '/philosophie';

const Nav: FunctionComponent<{ currentPath: Route }> = ({ currentPath }) => {
  const isActive = (path: string, current: string) => {
    return current === path;
  };
  const links: { label: string; path: Route }[] = [
    { label: 'accueil', path: '/' },
    { label: 'portfolio', path: '/portfolio' },
    { label: 'ma philosophie', path: '/philosophie' },
  ];
  return (
    <nav class='flex justify-center lg:justify-end py-3 px-4 lg:px-16'>
      <div class='text-lg lg:text-xl flex gap-4'>
        {links.map((link) => (
          <a
            data-text={link.label}
            href={link.path}
            class={isActive(link.path, currentPath) ? Styles.menuitemActive : Styles.menuitem}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default Nav;
