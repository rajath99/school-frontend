import { useState } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState('student');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setRole('teacher')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              role === 'teacher' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Teacher
          </button>
          <button
            onClick={() => setRole('student')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              role === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Student
          </button>
        </div>

        <h2 className="text-center text-2xl font-bold mb-4 capitalize">{role} Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
