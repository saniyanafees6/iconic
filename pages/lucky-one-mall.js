import Image from 'next/image';
import React from 'react';
import { Divider, Footer, Navigation, ProjectStyle } from '../components';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Clients', href: '/clients', current: true },
];
const lists = [
  {
    id: 1,
    description: [
      'Installation of 4x1000 USRT Centrifugal Chiller in Lucky One Mall',
    ],
    imageUrl: ['luckyOneAsset1.png'],
  },
  {
    id: 2,
    title: 'Waste Heat Recovery',
    description: [
      '1200 USRT Shaungling Absorption Chillers',
      '800 USRT Hot Water Chiller',
    ],
    imageUrl: ['luckyOneAsset2.png'],
  },
  {
    id: 3,
    description: [
      'Air Handling Units, Fan Coil Units.',
      'GI Sheet Ducting and Insulation.',
      'Pre-Insulated Ducting.',
    ],
    imageUrl: [
      'luckyOneAsset3.png',
      'luckyOneAsset4.png',
      'luckyOneAsset5.png',
    ],
  },
  {
    id: 4,
    title: 'Ducted Type Fan Coil Units',
    imageUrl: [
      'luckyOneAsset6.png',
      'luckyOneAsset7.png',
      'luckyOneAsset8.png',
      'luckyOneAsset9.png',
    ],
  },
  {
    id: 5,
    title: 'Power system, cable trays and data cabling',
    imageUrl: ['luckyOneAsset10.png', 'luckyOneAsset11.png'],
  },
  {
    id: 6,
    title:
      'Fire fighting piping, including installation of fire sprinklers and automated fire fighting pumping systems.',
    imageUrl: [
      'luckyOneAsset12.png',
      'luckyOneAsset13.png',
      'luckyOneAsset14.png',
      'luckyOneAsset15.png',
    ],
  },
];

const luckyOneMall = () => {
  return (
    <>
      <Navigation navigation={navigation} />
      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-amber-700 font-semibold tracking-wide uppercase">
                Project
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Lucky One Mall
              </p>
            </div>
          </div>
          <ProjectStyle />
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-1">
              <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <ul role="list">
                  {lists.map((de, idx) => (
                    <>
                      {de.title ? <h2>{de.title}</h2> : null}
                      <li key={de.id} key={idx}>
                        <div className="mt-8 lg:mt-0">
                          <ul role="list" className="divide-y divide-gray-200">
                            {de.description
                              ? de.description.map((des, idx) => (
                                  <li key={idx}>
                                    <div className="block hover:bg-gray-50">
                                      <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                          <p className="text-sm font-medium text-slate-800 truncate">
                                            &rarr; {des}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))
                              : null}
                          </ul>
                        </div>
                        <ul
                          role="list"
                          className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        >
                          {de.imageUrl.map((img, idx) => (
                            <li
                              key={idx}
                              className="col-span-1 flex flex-wrap flex-col text-center bg-white rounded-lg"
                            >
                              <div className="flex-1 flex flex-col p-8">
                                <img
                                  className="w-fit h-fit flex-shrink-0 mx-auto"
                                  src={img}
                                  alt=""
                                />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default luckyOneMall;
