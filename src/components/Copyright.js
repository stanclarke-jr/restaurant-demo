import React from 'react';

const Copyright = () => {
  return (
    <div className="border-t border-white/20">
      <div className="container mx-auto">
        <div className="py-6">
          <p className="text-center text-base">
            Copyright &copy; {new Date().getFullYear()} Bistro Cafe. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
