import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Ready to manage your dispatch like a pro?
        </h2>
        
        {/* CTA Button */}
        <div className="mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
        
        {/* Contact Information */}
        <div className="text-gray-600 text-sm">
          <p>
            Need help? Contact{' '}
            <a 
              href="mailto:support@dispatchpro.com" 
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              support@dispatchpro.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;