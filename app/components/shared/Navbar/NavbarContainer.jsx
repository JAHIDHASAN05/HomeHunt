
'use client';

import { useState } from 'react';
import MenuButton from './MenuButton';
import Navbar from './Navbar'; 

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />      
    </>
  );
};

export default NavbarContainer;
