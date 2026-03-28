import React from 'react';

const Header = ({ isLoggedIn, onLoginClick, onLogoClick }) => {
  return (
    <header className="p-4 border-b-2 border-gray-200 flex flex-col bg-white sticky top-0 z-20">
      <div className="flex justify-between items-center w-full">
        {/* 로고 클릭 시 지도 탭으로 이동하게 함 */}
        <h1 
          className="text-2xl font-extrabold text-orange-600 tracking-tighter cursor-pointer"
          onClick={onLogoClick}
        >
          🐾산책하개
        </h1>
        
        <button 
          onClick={onLoginClick}
          className="px-4 py-1.5 border-2 border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </div>
      
      {/* 프로젝트 명 부제로) */}
      <p className="text-[9px] text-gray-400 font-medium mt-1 tracking-tight">
        실시간 위치 기반 반려견 산책 친구 찾기 서비스
      </p>
    </header>
  );
};

export default Header;