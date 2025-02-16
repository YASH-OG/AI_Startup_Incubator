import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ChartBarIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  
  const isActiveRoute = (path: string) => router.pathname === path;

  const navItems = [
    { name: 'Overview', path: '/', icon: ChartBarIcon },
    { name: 'Market', path: '/market-validation', icon: UserGroupIcon },
    { name: 'Legal', path: '/legal-compliance', icon: ScaleIcon },
    { name: 'Investors', path: '/investors', icon: CurrencyDollarIcon },
    { name: 'Risk', path: '/risk-horizon', icon: ExclamationTriangleIcon },
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Navbar */}
      <nav className="bg-background border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <ChartBarIcon className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">StartupAI</span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActiveRoute(item.path)
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:text-white hover:bg-background-light'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
