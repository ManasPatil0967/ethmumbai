"use client";

import Link from "next/link";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md">
        <Link href="/register/registerUser">
          <div className="block bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">User</h2>
            <p className="text-gray-700 text-center">Register as a user</p>
          </div>
        </Link>
        <Link href="/register/registerMerchant">
          <div className="block bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Merchant</h2>
            <p className="text-gray-700 text-center">Register as a merchant</p>
          </div>
        </Link>
        <Link href="/register/registerDepartment">
          <div className="block bg-white shadow-md rounded-lg px-2 py-6 hover:bg-blue-100 transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Department</h2>
            <p className="text-gray-700 flex text-center">Register as department</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
