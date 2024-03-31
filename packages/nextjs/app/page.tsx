/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import type { NextPage } from "next";
import Image from "next/image";
import img from "../public/cf1.png";
import img2 from "../public/cbdc.png";

// import { useAccount } from "wagmi";
// import { BugAntIcon0, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "/components/scaffold-eth";
// import { ResponsiveLine } from "@nivo/line";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();
  // const [showLineChart, setShowLineChart] = useState(false);

  return (
    <>
      <div className="bg-gray-50 py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Future of Money</h1>
              <p className="text-xl text-gray-500 md:text-2xl/relaxed dark:text-gray-400">
                Advancing financial inclusion, innovation, and security with Central Bank Digital Currencies
              </p>
            </div>
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src={img}
              width="550"
            />
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Advantages of CBDCs</h2>
            <p className="max-w-3xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Central Bank Digital Currencies offer a wide range of benefits to individuals, businesses, and
              governments. Here are the key features that make CBDCs a transformative form of digital money.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <DatabaseIcon className="w-12 h-12 rounded-full bg-gray-100 p-3 dark:bg-gray-800" />
              <h3 className="text-xl font-bold dark:text-black">Financial Inclusion</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                CBDCs can provide unbanked and underbanked populations with access to secure and affordable financial
                services.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CircleIcon className="w-12 h-12 rounded-full bg-gray-100 p-3 dark:bg-gray-800" />
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                CBDCs can spur the development of new financial products and services, driving innovation in the digital
                economy.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheckIcon className="w-12 h-12 rounded-full bg-gray-100 p-3 dark:bg-gray-800" />
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                CBDCs are designed with advanced security features, reducing the risk of fraud and counterfeiting in the
                payment system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Rise of CBDCs</h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Charting the global adoption of Central Bank Digital Currencies over time. The implementation of CBDCs
                is reshaping the financial landscape, offering new opportunities for digital payments and monetary
                innovation.
              </p>
            </div>
            <div className="flex items-center">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src={img2}
                width="550"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn More About CBDCs</h2>
          <p className="max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400">
            Explore the potential of Central Bank Digital Currencies and their impact on the global economy.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="https://github.com/ManasPatil0967/ethmumbai"
            >
              Read the Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const lineChartProps = {
  data: [
    {
      id: "Desktop",
      data: [
        { x: "Jan", y: 43 },
        { x: "Feb", y: 137 },
        { x: "Mar", y: 61 },
        { x: "Apr", y: 145 },
        { x: "May", y: 26 },
        { x: "Jun", y: 154 },
      ],
    },
    {
      id: "Mobile",
      data: [
        { x: "Jan", y: 60 },
        { x: "Feb", y: 48 },
        { x: "Mar", y: 177 },
        { x: "Apr", y: 78 },
        { x: "May", y: 96 },
        { x: "Jun", y: 204 },
      ],
    },
  ],
  margin: { top: 10, right: 10, bottom: 40, left: 40 },
  xScale: {
    type: "point",
  },
  yScale: {
    type: "linear",
  },
  axisBottom: {
    tickSize: 0,
    tickPadding: 16,
  },
  axisLeft: {
    tickSize: 0,
    tickValues: 5,
    tickPadding: 16,
  },
  colors: ["#2563eb", "#e11d48"],
  pointSize: 6,
  useMesh: true,
  gridYValues: 6,
  theme: {
    tooltip: {
      chip: {
        borderRadius: "9999px",
      },
      container: {
        fontSize: "12px",
        textTransform: "capitalize",
        borderRadius: "6px",
      },
    },
    grid: {
      line: {
        stroke: "#f3f4f6",
      },
    },
  },
  role: "application",
};

function CircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function ShieldCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default Home;
