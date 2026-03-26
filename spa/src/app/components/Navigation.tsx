'use client';

/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import NavItem from './NavItem';

const Navigation = ({
  nodeName,
  content,
  currentLanguage,
  isMagnoliaEdit,
}: {
  nodeName: string;
  content: MgnlContent;
  currentLanguage: string;
  isMagnoliaEdit: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 h-20 px-8 z-50 flex justify-between items-center bg-white border-b border-[#a9a9a9]">
      
      {/* Logo */}
      <a href="/">
        <img src="/daily-planet-logo.png" className="w-52" alt="Daily Planet Logo" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <NavItem
            content={content}
            nodeName={nodeName}
            currentLanguage={currentLanguage}
            isMagnoliaEdit={isMagnoliaEdit}
          />
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <NavItem
              content={content}
              nodeName={nodeName}
              currentLanguage={currentLanguage}
              isMagnoliaEdit={isMagnoliaEdit}
            />
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;