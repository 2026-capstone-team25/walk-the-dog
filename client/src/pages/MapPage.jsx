import React, { useState } from 'react';

const MapPage = () => {
  const [isWalking, setIsWalking] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* 1. 지도 영역 (점선 박스) */}
      <div className="flex-1 bg-gray-100 border-2 border-dashed border-gray-400 m-4 flex items-center justify-center text-gray-500 font-bold text-sm text-center px-4">
        카카오맵 API 연동 예정<br/>(주변 산책 중인 강아지 표시)
      </div>
      
      {/* 2. 산책 컨트롤 영역 (실무적인 뼈대) */}
      <div className="p-4 border-2 border-gray-200 mx-4 mb-6 rounded flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-700">🐾 지금 산책 중인가요?</span>
          <button 
            onClick={() => setIsWalking(!isWalking)}
            className={`px-6 py-2 border-2 font-bold text-sm rounded ${
              isWalking 
                ? "bg-orange-500 text-white border-orange-600" 
                : "bg-gray-100 text-gray-400 border-gray-300"
            }`}
          >
            {isWalking ? "ON" : "OFF"}
          </button>
        </div>
        <p className="text-[10px] text-gray-400 border-t pt-2">
          * 화면이 꺼져도 마지막 전송 위치가 10분간 유지된 후 자동 종료됩니다.
        </p>
      </div>
    </div>
  );
};

export default MapPage;