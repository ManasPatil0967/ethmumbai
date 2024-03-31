"use client";

import { useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const PayMerchant = () => {
  const [merchantAddress, setMerchantAddress] = useState("");
  const [amount, setAmount] = useState("0");

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "CivicFLow",
    functionName: "payMerchant",
    args: [merchantAddress, BigInt(ethers.parseUnits(amount, 18))],
    value: ethers.parseUnits("0.1", 18), // Assuming a fee of 0.1 ETH for the transaction
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if amount is a valid number string
    if (!amount || isNaN(Number(amount))) {
      alert("Please enter a valid amount.");
      return;
    }

    writeAsync();
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-6 gradient-background">
      {/* Left Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center md:text-left">Pay Merchant</h1>
          <p className="text-lg text-gray-800 dark:text-white font-bold text-center md:text-left">
            Pay merchants using your CBDC funds for goods and services.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="merchant-address" className="text-gray-700 dark:text-white font-semibold">
              Merchant Address
            </label>
            <input
              id="merchant-address"
              placeholder="0xMerchantAddress"
              onChange={e => setMerchantAddress(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="amount" className="text-gray-700 dark:text-white font-semibold">
              Amount (CBDC)
            </label>
            <input
              id="amount"
              placeholder="1"
              onChange={e => {
                const value = e.target.value;
                if (!isNaN(Number(value))) {
                  setAmount(value);
                }
              }}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            disabled={isLoading || isMining}
          >
            {isLoading || isMining ? "Processing Payment..." : "Pay Merchant"}
          </button>
        </form>
      </div>
      {/* Right Section */}
      <div className="flex items-center justify-center">
        <Image
          alt="Pay Merchant"
          className="rounded-lg object-cover"
          height="300"
          src="/pay-merchant.png"
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

export default PayMerchant;
