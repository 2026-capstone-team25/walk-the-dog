import React from 'react';

const MyPage = () => {
  return (
    <div className="flex-1 p-6 flex flex-col gap-6 bg-white">
      <div className="flex items-center gap-4 border-b pb-6">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">🐶</div>
        <div>
          <h2 className="text-lg font-bold">우리집 강아지</h2>
          <p className="text-sm text-gray-500">프로필을 설정해주세요</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <button className="w-full text-left p-3 border rounded hover:bg-gray-50">산책 정보 보기</button>
        <button className="w-full text-left p-3 border rounded hover:bg-gray-50">내 동네 설정</button>
        <button className="w-full text-left p-3 border rounded text-red-500 font-medium">회원 탈퇴</button>
      </div>
    </div>
  );
};

export default MyPage;