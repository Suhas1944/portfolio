import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="layout-wrapper flex flex-col min-h-screen">
      <Navbar />
      <main className="layout-content flex-grow pt-24 pb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
