import React from 'react';
import Head from 'next/head';

import { Navigation, Footer } from '../components';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import SideStyle from '../components/SideStyle';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Clients', href: '/clients', current: true },
];
const companies = [
  {
    name: 'Falcon Mall',
    imageUrl: 'falcon.png',
    url: '/falcon-mall',
  },
  {
    name: 'Indus Hospital',
    imageUrl: 'indus.png',
    url: '/indus',
  },
  {
    name: 'National Institute of Cardiovascular Diseases',
    imageUrl: 'nicd.png',
    url: '/nicvd',
  },
  {
    name: 'Parco',
    imageUrl: 'parco.png',
    url: '/parco',
  },
  {
    name: 'Pharmatec',
    imageUrl: 'pharmatec.png',
    url: '/pharmatec',
  },
  {
    name: 'SIUT',
    imageUrl: 'siut.png',
    url: '/siut',
  },
  {
    name: 'Utopia',
    imageUrl: 'utopia.png',
    url: '/utopia-industries',
  },
  {
    name: 'Lucky One Mall',
    imageUrl: 'luckyOneMall.png',
    url: '/lucky-one-mall',
  },
  {
    name: 'Lucky Energy',
    imageUrl: 'luckyEnergy.png',
    url: '/lucky-energy',
  },
];
const completedProjects = [
  {
    name: 'Lucky Energy Private Ltd.',
    details: [
      'Design Drawing and Installation',
      'JanBacher Gas Engines of 4.4 MW at different locations for Lucky Energy Private Ltd.',
      'MWM Gas Engines of 3.5 MW at Lucky Energy Private Ltd.',
      'Waste Heat Recovery Steam Boiler at Lucky Energy',
      'Installation of 4x1000 USRT Centrifugal Chiller in Lucky One Mall',
      '1200 USRT Shaungling Absorption Chillers',
      '800 USRT Hot Water Chiller',
      'Air Handling Units',
      'Fan Coil Units.',
      'GI Sheet Ducting and Insulation.',
    ],
  },
];
const onGoingProjects = [{}];
const projects = () => {
  return (
    <>
      <Head>
        <title>Iconic Engineering | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation navigation={navigation} />
      <div className="relative py-16 bg-white overflow-hidden">
        <SideStyle size="3" />
        <div className="text-lg max-w-prose mx-auto">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pb-10">
                <span className="block xl:inline">Who We've Worked With</span>{' '}
              </h1>
            </div>
          </main>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {companies.map((company) => (
                <li
                  key={company.name}
                  className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <img
                      className="w-32 h-32 flex-shrink-0 mx-auto"
                      src={company.imageUrl}
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      {company.name}
                    </h3>
                  </div>
                  <div>
                    <div className="-mt-px flex ">
                      <div className="w-0 flex-1 flex">
                        <a
                          href={company.url}
                          className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                        >
                          <ExternalLinkIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">See Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default projects;
