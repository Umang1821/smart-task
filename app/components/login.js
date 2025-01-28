'use client';

import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { signIn } = useAuth();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-gray-500 to-white">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Hi! there
                </h1>
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-full w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    onClick={signIn}
                >
                    Sign in with Google
                </button>
                
            </div>
        </div>
    );
}
