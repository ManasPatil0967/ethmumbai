"use client";

import Link from "next/link";
import { NextPage } from "next";

// import { useScaffoldContract, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Profile: NextPage = () => {
  return (
    <>
      <div className="flex flex-col text-center justify-center">
        <h1>Profile</h1>
        <label>
          <Link href="/register/registerUser">User</Link>
        </label>
        <label>
          <Link href="/register/registerMerchant">Merchant</Link>
        </label>
        <label>
          <Link href="/register/registerDepartment">Department</Link>
        </label>
      </div>
    </>
  );
};

export default Profile;
