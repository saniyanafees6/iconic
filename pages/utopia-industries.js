import Image from 'next/image';
import React from 'react';
import { Navigation, ProjectStyle, Footer } from '../components';
import UtopiaAsset from '../public/utopiaAsset.png';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Clients', href: '/clients', current: true },
];
const lists = [
  {
    id: 1,
    description: 'Drawing & Design of Eight MW Gas and Diesel Power House.',
  },
  {
    id: 2,
    description:
      'Drawing, Design & Installation of One MW JenBacher Gas Engine',
  },
];
const utopiaIndustries = () => {
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
                  Utopia Industries
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <ProjectStyle />
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <Image
                        className="rounded-lg shadow-lg object-cover object-center"
                        src={UtopiaAsset}
                        alt="Whitney leaning against a railing on a downtown street"
                        width={600}
                        height={350}
                      />
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <span className="ml-2">JenBacher Gas Engine</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <ul role="list" className="divide-y divide-gray-200">
                  {lists.map((position) => (
                    <li key={position.id}>
                      <div className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-800">
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

export default utopiaIndustries;
