import React from 'react';

/**
 * 투명도를 조절해 애니메이션 형식으로 경고 팝업을 띄우는 컴포넌트
 */
const DangerAlert = () => {
    return (
        <div id='dangerAlert'
            className="absolute top-1/3 mb-4 hidden items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 opacity-0 transition-opacity duration-500"
            role="alert">
            <svg className="inline h-4 w-4 flex-shrink-0 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">경고!</span> 이 기능은 아직 구현되지 않았습니다.
            </div>
        </div>
    );
};

export default DangerAlert;