/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LogInWithAnonAadhaar, useAnonAadhaar, useProver } from "@anon-aadhaar/react";
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

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

export default function Component() {
  const [companyName, setCompanyName] = useState("");
  const [sectorialId, setSectorialId] = useState("");
  const [proofOfIdentity, setProofOfIdentity] = useState("");
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  //   const [generatedProof, setGeneratedProof] = useState<{} | null>(null);

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log(anonAadhaar.status);
    }
  }, [anonAadhaar]);

  useEffect(() => {
    if (latestProof) {
      const formattedProof = JSON.stringify(JSON.parse(latestProof), null, 2);
      console.log(JSON.parse(formattedProof).signalHash);
      //   setGeneratedProof(formattedProof);
      setProofOfIdentity(JSON.parse(formattedProof).signalHash);
      // console.log(generatedProof);
    }
  }, [latestProof]);
  const handleRegister = () => {
    writeAsync();
  };

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "CivicFLow",
    functionName: "registerMerchant",
    args: [companyName, sectorialId, proofOfIdentity],
  });

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-6 gradient-background">
      {/* Left Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center md:text-left">Merchant Registration</h1>
          <p className="text-lg text-gray-800 dark:text-white font-bold text-center md:text-left">
            Request to join a Sector, Get approved, Receive seamless payments.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="company-name" className="text-gray-700 dark:text-white font-semibold">
              Company Name
            </label>
            <input
              id="company-name"
              placeholder="Acme Inc"
              onChange={e => setCompanyName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sec-id" className="text-gray-700 dark:text-white font-semibold">
              Sectorial ID
            </label>
            <input
              id="sec-id"
              placeholder="0x1"
              onChange={e => setSectorialId(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="proof-identity" className="text-gray-700 dark:text-white font-semibold">
              Proof of Identity
            </label>
            <LogInWithAnonAadhaar nullifierSeed={1234567890} />
          </div>
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex items-center justify-center">
        <Image
          alt="Company registration"
          className="rounded-lg object-cover"
          height="300"
          src="/cf1.png"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
    </div>
  );
}
