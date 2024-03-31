"use client";

import { useState } from "react";
import Image from "next/image";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import img from "../../../public/cf1.png";

const RegisterDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "CivicFLow",
    functionName: "registerDepartment",
    args: [departmentName],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    writeAsync();
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-6 gradient-background">
      {/* Left Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center md:text-left">Register Department</h1>
          <p className="text-lg text-gray-800 dark:text-white font-bold text-center md:text-left">
            Register a new department to manage and distribute CBDC funds.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="department-name" className="text-gray-700 dark:text-white font-semibold">
              Department Name
            </label>
            <input
              id="department-name"
              placeholder="Department Name"
              onChange={e => setDepartmentName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            disabled={isLoading || isMining}
          >
            {isLoading || isMining ? "Registering Department..." : "Register Department"}
          </button>
        </form>
      </div>
      {/* Right Section */}
      <div className="flex items-center justify-center">
        <Image
          alt="Register Department"
          className="rounded-lg object-cover"
          height="300"
          src={img}
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
    </div>
  );
};

export default RegisterDepartment;
