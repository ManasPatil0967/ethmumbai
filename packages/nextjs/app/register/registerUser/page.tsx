/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/cf1.png";
import { LogInWithAnonAadhaar, useAnonAadhaar, useProver } from "@anon-aadhaar/react";
// import { utils } from "ethers";
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

export default function Component() {
  const [name, setname] = useState("");
  const [ocpn, setocpn] = useState<string[]>([]);
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
      console.log(JSON.parse(formattedProof).id);
      //   setGeneratedProof(formattedProof);
      setProofOfIdentity(JSON.parse(formattedProof).id);
      // console.log(generatedProof);
    }
  }, [latestProof]);

  const handleRegister = () => {
    writeAsync();
  };

  const handleOccupationChange = (value: string) => {
    setocpn([...ocpn, value]);
  };

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "CivicFLow",
    functionName: "registerUser",
    args: [name, proofOfIdentity, ocpn],
  });

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-6 gradient-background">
      <div className="space-y-6">
        <div className="space-y-2">
          <label>Enable Sectors</label>
          <div className="m-2space-x-2 flex flex-col">
            <div className="flex items-center">
              <input type="checkbox" id="edu" value="edu" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="edu">Education</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="agr" value="agr" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="agr">Agriculture</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="ifr" value="ifr" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="ifr">Infrastructure</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rtl" value="rtl" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="rtl">Retail</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="hthc" value="hthc" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="hthc">Healthcare</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="hsng" value="hsng" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="hsng">Housing</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="enrg" value="enrg" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="enrg">Energy</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="trp" value="trp" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="trp">Transportation</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="ngo" value="ngo" onChange={e => handleOccupationChange(e.target.value)} />
              <label htmlFor="ngo">NGOs</label>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="company-name">Name</label>
            <input id="company-name" placeholder="  Acme Inc" onChange={e => setname(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="proof-identity">Proof of Identity</label>
            <LogInWithAnonAadhaar nullifierSeed={1234567890} />
          </div>

          <button className="w-full" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-y-4">
        <Image
          alt="Company registration"
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
}
