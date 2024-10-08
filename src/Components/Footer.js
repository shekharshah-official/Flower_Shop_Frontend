import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your App Name. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              Made with ♥ by{' '}
              <a href="https://github.com/your-profile" className="underline hover:text-gray-300">
                Your Name
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
