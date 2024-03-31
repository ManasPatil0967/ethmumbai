/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";
import img from "../../public/cf1.png";
import { ethers } from "ethers";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

const MakeScheme = () => {
  const [schemeName, setSchemeName] = useState("");
  const [schemeId, setSchemeId] = useState("");
  const [schemeAmount, setSchemeAmount] = useState(0);
  const [schemeDuration, setSchemeDuration] = useState("0");
  const [selectedOption, setSelectedOption] = useState("");
  const combinedValue = schemeName + selectedOption;
  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "CivicFLow",
    functionName: "makeScheme",
    args: [
      schemeName,
      ethers.parseEther(String(schemeAmount)), // Convert schemeAmount to a string
      BigInt(BigInt(parseInt(schemeDuration)) * BigInt(24) * BigInt(60) * BigInt(60)),
      schemeId,
    ],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    writeAsync();
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-6 gradient-background">
      {/* Left Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center md:text-left">Create New Scheme</h1>
          <p className="text-lg text-gray-800 dark:text-white font-bold text-center md:text-left">
            Distribute funds to eligible users based on specific criteria.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="scheme-name" className="text-gray-700 dark:text-white font-semibold">
              Scheme Name
            </label>
            <input
              id="scheme-name"
              placeholder="Scheme Name"
              onChange={e => setSchemeName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="scheme-id" className="text-gray-700 dark:text-white font-semibold">
              Scheme ID
            </label>
            <div className="flex">
              {/* <input
                id="scheme-id"
                placeholder="SchemeID123"
                value={schemeId}
                onChange={e => setSchemeId(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              /> */}
              <select
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}
                required
                className="px-4 py-2 rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Scheme ID</option>
                <option value="@edu">edu</option>
                <option value="@agr">agr</option>
                <option value="@ifr">ifr</option>
                <option value="@rtl">rtl</option>
                <option value="@hthc">hthc</option>
                <option value="@hsng">hsng</option>
                <option value="@enrg">enrg</option>
                <option value="@trp">trp</option>
                <option value="@ngo">ngo</option>
              </select>
            </div>
            <p>Combined Value: {combinedValue}</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="scheme-amount" className="text-gray-700 dark:text-white font-semibold">
              Scheme Amount (CBDC)
            </label>
            <input
              id="scheme-amount"
              placeholder="100"
              onChange={e => setSchemeAmount(Number(e.target.value))}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="scheme-duration" className="text-gray-700 dark:text-white font-semibold">
              Scheme Duration (days)
            </label>
            <input
              id="scheme-duration"
              placeholder="30"
              onChange={e => setSchemeDuration(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            disabled={isLoading || isMining}
          >
            {isLoading || isMining ? "Creating Scheme..." : "Create Scheme"}
          </button>
        </form>
      </div>
      {/* Right Section */}
      <div className="flex items-center justify-center">
        <Image
          alt="Scheme Creation"
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

export default MakeScheme;
