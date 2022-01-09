import React from 'react';
import { ProjectStyle, Navigation, Footer } from '../components';
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Clients', href: '/clients', current: true },
];

const lists = [
  {
    id: 1,
    description: [
      'Design Drawing and Installation.',
      'JanBacher Gas Engines of 4.4 MW at different locations for Lucky Energy Private Ltd.',
      'MWM Gas Engines of 3.5 MW at Lucky Energy Private Ltd.',
      'Waste Heat Recovery Steam Boiler at Lucky Energy',
    ],
    imageUrl: [
      'luckyEnergyAsset1.png',
      'luckyEnergyAsset2.png',
      'luckyEnergyAsset3.png',
    ],
  },
];
const luckyEnergy = () => {
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
                Lucky Energy
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
                            {de.description.map((des, idx) => (
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
                            ))}
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

export default luckyEnergy;
