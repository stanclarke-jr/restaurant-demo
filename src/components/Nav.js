import { navData } from '../data';

const Nav = () => {
  return (
    <nav className="= h-full w-full">
      <ul className="flex h-full flex-col items-center justify-center gap-y-6">
        {navData.map((item) => {
          return (
            <li key={item.name}>
              <a
                className="font-primary text-xl capitalize italic transition-all duration-300 hover:cursor-pointer hover:text-dark"
                href={`${item.href}${item.name}`}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
