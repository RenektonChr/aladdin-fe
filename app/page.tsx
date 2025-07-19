'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  const [currentNav, setCurrentNav] = useState('Agents');

  const handleNavChange = (navItem: string) => {
    setCurrentNav(navItem);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-50">
      <Navbar onNavChange={handleNavChange} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentNav}
          </h1>
          <p className="text-gray-600">
            {currentNav} content
          </p>
        </div>
      </main>
    </div>
  );
}
