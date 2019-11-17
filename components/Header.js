import Link from "./Link";

export default () => (
  <header className="Header">
    <div className="Header__left">
      <Link href="/">
        <a>
          <img className="Avatar" src="/images/me.jpg" alt="Photo of Angel" />
        </a>
      </Link>
    </div>
    <div className="Header__right">
      <h1 className="Title">Angel Paunchev</h1>
      <nav className="Navigation">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </nav>
    </div>
  </header>
);