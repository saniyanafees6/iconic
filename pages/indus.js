import Image from 'next/image';
import React from 'react';
import { Footer, Navigation, ProjectStyle } from '../components';
import FalconAsset from '../public/falconAsset.png';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Clients', href: '/clients', current: true },
];
const lists = [
  {
    id: 1,
    description:
      'Installation, commissioning and testing of complete HVAC for new pharmacy.',
  },
  {
    id: 2,
    description:
      'Installation of split Air Conditioners in PEADS cancer wards.',
  },
];
const indus = () => {
  return (
    <>
      <Navigation navigation={navigation} />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-amber-700 font-semibold tracking-wide uppercase">
                  Project
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Indus Hospital Korangi, Karachi
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <ProjectStyle />
              </div>
              <div className="mt-8 lg:mt-0">
                <ul role="list" className="divide-y divide-gray-200">
                  {lists.map((position) => (
                    <li key={position.id}>
                      <div className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-800 truncate">
                              &rarr; {position.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
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

export default indus;
