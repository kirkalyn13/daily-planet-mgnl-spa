/* eslint-disable @next/next/no-img-element */
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { EditableComponent } from '@magnolia/react-editor';

const year = new Date().getFullYear();

const Footer = ({ content }: { content: MgnlContent }) => {
  return (
    <>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 md:gap-12 sm:gap-2'>
        <a
          href='https://dailyplanetdc.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='py-6 md:max-w-64 text-center'
            src='/daily-planet-logo-inverted.png'
            alt='Daily Planet Logo'
          />
        </a>
        <div className='text-center text-white py-6'>
          <p> © {year} Daily Planet. Delivering truth, justice, and clean UI. </p>
          <p> All rights belong to DC Comics.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
