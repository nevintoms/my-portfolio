import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black w-full font-extralight text-white p-2 text-center text-xs ">
      <p>&copy; {currentYear} Nevin Toms. All rights reserved.</p>
    </footer>
  );
};

export default Footer;