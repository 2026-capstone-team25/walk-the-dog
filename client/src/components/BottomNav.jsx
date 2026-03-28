import React from 'react';

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'map', name: '지도' },
    { id: 'town', name: '우리동네' },
    { id: 'chat', name: '채팅' },
    { id: 'my', name: '내정보' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t-2 border-gray-200 bg-white h-[65px] flex items-center z-20 shadow-lg">
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          onClick={() => onTabChange(tab.id)} 
          className={`flex-1 h-full flex flex-col items-center justify-center border-r-2 last:border-r-0 transition-colors ${
            activeTab === tab.id ? "bg-orange-50 text-orange-600 font-extrabold" : "text-gray-500"
          }`}
        >
          <span className="text-sm tracking-tight">{tab.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;