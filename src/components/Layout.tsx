import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <main className="layout-main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
