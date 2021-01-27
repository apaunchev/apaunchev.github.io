import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const routes = {
  about: {
    href: '/',
    activePaths: ['/'],
    title: 'About',
  },
  portfolio: {
    href: '/portfolio',
    activePaths: ['/portfolio'],
    title: 'Portfolio',
  },
  library: {
    href: '/library',
    activePaths: ['/library', '/library/[type]'],
    title: 'Library',
  },
};

function NavLink({ href, activePaths, title }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={
          activePaths.includes(router.pathname)
            ? 'mr-4 lg:mr-5 pb-1 lg:text-lg border-purple-600'
            : 'mr-4 lg:mr-5 pb-1 lg:text-lg'
        }
      >
        {title}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="flex items-center">
      <Link href="/">
        <a className="border-none">
          <img
            src="/me.png"
            alt="Photo of the author"
            width={200}
            height={200}
            className="mr-5 lg:mr-6 w-16 lg:w-20 rounded-full"
          />
        </a>
      </Link>
      <nav className="flex">
        {Object.keys(routes).map(key => (
          <NavLink key={key} {...routes[key]} />
        ))}
      </nav>
    </header>
  );
}
