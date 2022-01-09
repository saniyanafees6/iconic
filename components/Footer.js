/* This example requires Tailwind CSS v2.0+ */
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

export default function Footer() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-50 sm:text-3xl">
                Get In Touch
              </h2>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <LocationMarkerIcon
                      className="h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-200">
                    <p>SU 124, Sector G, Askari V, Malir Cantt. Karachi</p>
                  </div>
                </div>

                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon
                      className="h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-200">
                    <p>+92 333 8235130</p>
                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-0">
              <div className="mt-24 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-200">
                  <p>info@iconicengineering.net</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-200">
                  <p>munir.hashmi@iconicengineering.net</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
