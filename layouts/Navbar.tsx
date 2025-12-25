import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">React 19 Starter</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/others" className="hover:underline">
              Others
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
);

export default Navbar;
