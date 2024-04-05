import React from 'react';

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-grow items-center justify-center bg-gray-50">
            <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold font-gmarket">404</h1>
                <p className="text-gray-600 font-noto-sans">Oops! The page you are looking for could not be found.</p>
                <a href="/"
                   className="mt-4 inline-block rounded bg-orange-500 px-4 py-2 font-semibold text-white font-noto-sans hover:bg-orange-600"> Go
                    back to Home </a>
            </div>
        </div>
    );
};

export default NotFound;