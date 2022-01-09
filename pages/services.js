import React from 'react';
import Head from 'next/head';

import { Footer, Navigation, SideStyle } from '../components';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: true },
  { name: 'Clients', href: '/clients', current: false },
];
const services = () => {
  return (
    <>
      <Head>
        <title>Iconic Engineering | Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation navigation={navigation} />
      <div className="relative py-16 bg-white overflow-hidden">
        <SideStyle size="2" />
        <div className="text-lg max-w-prose mx-auto">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pb-10">
                <span className="block xl:inline">Services provided by</span>{' '}
                <span className="block text-amber-600 xl:inline">
                  Iconic Engineering
                </span>
              </h1>
              <ul className="list-disc mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <li className="rounded-md hover:bg-amber-50 hover:shadow">
                  Industrial Power Generation
                </li>
                <li className="rounded-md hover:bg-amber-50 hover:shadow">
                  HVAC/MEP for Shopping Malls & Hospitals
                </li>
                <li className="rounded-md hover:bg-amber-50 hover:shadow">
                  O&M Services for HVAC
                </li>
                <li className="rounded-md hover:bg-amber-50 hover:shadow">
                  MEP for Shopping Malls, Hospital and Hotel and High-­‐rise
                  building.
                </li>
              </ul>
              <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-bold">
                Installation/Commissioning:
              </p>
              <ul className="list-disc mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <li className="rounded-md hover:bg-amber-50 hover:shadow">
                  Power Plants for Industries, Shopping Malls and Hospitals.
                </li>
                <li className="rounded-md hover:bg-amber-50 hover:shadow">
                  Waste heat recovery system on Gas Engines.
                </li>
                <li className="rounded-md hover:bg-amber-50 hover:shadow">
                  Electrical Chillers and Absorption Chillers.
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default services;
