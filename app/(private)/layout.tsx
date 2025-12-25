import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

const PrivateLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="min-h-screen flex flex-col">
    {/* navbar */}
    <Navbar />

    <main className="flex-grow container mx-auto p-4">{children}</main>

    <Footer />
  </div>
);

export default PrivateLayout;
