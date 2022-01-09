import React from 'react';

const Divider = () => {
  return (
    <div className="max-w-prose mx-auto py-28 ">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Divider;
