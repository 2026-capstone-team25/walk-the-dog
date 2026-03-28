import React from 'react';

const TownPage = () => {
  return (
    <div className="flex-1 p-6 flex flex-col gap-4 bg-white">
      <h2 className="text-xl font-bold border-b-2 pb-2">동네 강아지 친구들</h2>
      <div className="border-2 border-gray-100 p-4 rounded-xl text-center text-gray-400 italic">
        같은 동네 강아지 목록이 표시됩니다.
      </div>
      {/* 여기 리스트를 map으로 돌리기 */}
    </div>
  );
};

export default TownPage;