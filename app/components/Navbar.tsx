'use client';

import { useState } from 'react';

interface NavbarProps {
  onNavChange: (navItem: string) => void;
}

export default function Navbar({ onNavChange }: NavbarProps) {
  const [activeNav, setActiveNav] = useState('Agents');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const navItems = ['Agents', 'Jobs', 'Wallet', 'Dashboard', 'Bills', 'Dao', 'Social'];

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    onNavChange(item);
  };

  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected);
    // 这里可以添加实际的钱包连接逻辑
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-50 to-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 左侧项目标题 */}
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
            </div>
            <span className="text-xl font-semibold text-gray-800">Aladdin</span>
          </div>
        </div>

        {/* 中间导航链接 - 圆角容器背景 */}
        <div className="hidden md:flex items-center">
          <div className="bg-gray-100 rounded-xl px-2 py-1 flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeNav === item
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 右侧钱包连接按钮 */}
        <div className="flex items-center">
          {isWalletConnected ? (
            <div className="bg-gray-100 rounded-xl px-4 py-2 flex items-center space-x-2">
              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">0x3301...1c53</span>
            </div>
          ) : (
            <button
              onClick={handleWalletConnect}
              className="bg-gray-100 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
            >
              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span>连接钱包</span>
            </button>
          )}
        </div>
      </div>

      {/* 移动端导航菜单 */}
      <div className="md:hidden mt-4">
        <div className="bg-gray-100 rounded-xl p-2">
          <div className="flex flex-wrap gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeNav === item
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 