import { connection } from 'next/server';
import { formatYear } from '@/utils/date';

const Footer = async () => {
  await connection();

  return (
    <footer className="bg-gray-100 p-4 text-center text-gray-600">
      <p>© {formatYear()} React 19 Starter</p>
    </footer>
  );
};

export default Footer;
