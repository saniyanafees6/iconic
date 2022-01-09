import Head from 'next/head';

import { Footer, Navigation, SideStyle } from '../components';
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'Clients', href: '/clients', current: false },
];
const lists = [
  {
    id: 1,
    title: 'Power Generation Plants',
  },
  {
    id: 2,
    title: 'MV, LV Electrical Switchgears, Transformers.',
  },
  {
    id: 3,
    title: 'Absorption Chillers, Gas Fired Chillers, Centrifugal Chiller.',
  },
  {
    id: 4,
    title:
      'MEP for Shopping Malls, Hospital and Hotel and High-­‐rise building.',
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Iconic Engineering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation navigation={navigation} />
      <div className="relative py-16 bg-white overflow-hidden">
        <SideStyle size="3" />
        <div className="text-lg max-w-prose mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-28 xl:pb-32 ">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-amber-600 xl:inline">
                      Iconic Engineering
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl md:max-w-5xl lg:mx-0 ">
                    We provide services in Operation & Maintenance, Installation
                    and commissioning of:
                  </p>
                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul role="list" className="divide-y divide-gray-200">
                      {lists.map((position) => (
                        <li key={position.id}>
                          <div className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-slate-800 truncate">
                                  &rarr; {position.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-3 text-2xl text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl md:max-w-5xl lg:mx-0">
                    We are operated by well experienced engineering having vast
                    experience in power generation and MEP Service including
                    HVAC.
                  </p>
                  <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl md:max-w-5xl lg:mx-0">
                    We have qualified, dedicated and hardworking team to cater
                    our valued customers technical needs.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="/services"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
                      >
                        Services
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="/contact"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 border-amber-600 hover:bg-amber-200 md:py-4 md:text-lg md:px-10"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
