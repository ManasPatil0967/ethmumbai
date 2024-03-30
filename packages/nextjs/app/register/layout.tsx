"use client";

import { ReactNode } from "react";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // Add your layout logic here

  return (
    <div>
      <AnonAadhaarProvider>{children}</AnonAadhaarProvider>
    </div>
  );
};

export default Layout;
