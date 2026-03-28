import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MapPage from './pages/MapPage';
import TownPage from './pages/TownPage';
import ChatPage from './pages/ChatPage';
import MyPage from './pages/MyPage';

function App() {
  const [activeTab, setActiveTab] = useState('map'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== 'map' && !isLoggedIn) {
      alert("로그인이 필요한 기능입니다!");
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col border-x-2 border-gray-200 shadow-2xl relative overflow-hidden font-sans text-gray-900">
      <Header 
        isLoggedIn={isLoggedIn} 
        onLoginClick={() => setIsLoggedIn(!isLoggedIn)} 
        onLogoClick={() => setActiveTab('map')}
      />

      <main className="flex-1 flex flex-col pb-[75px]">
        {activeTab === 'map' && <MapPage />}
        {activeTab === 'town' && <TownPage />}
        {activeTab === 'chat' && <ChatPage />}
        {activeTab === 'my' && <MyPage />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

    </div>
  );
}

export default App;