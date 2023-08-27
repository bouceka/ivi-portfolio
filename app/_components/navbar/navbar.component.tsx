'use client';
// @flow
import Link from 'next/link';
import * as React from 'react';
import { Action } from '../action/action.component';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import useScrollWindow from '@/app/_hooks/ScrollWindow';

export const Navbar = () => {
  const { data } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const scrollWindowY = useScrollWindow('shadow-navbar');

  const toggleMenu = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };

  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    toggleMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getLinks = () => (
    <>
      <Action as="link" styleType="header" className="text-3xl md:text-xl" href="/#work" onClick={(e) => scrollToElement(e, 'work')}>
        WORK
      </Action>
      <Action as="link" styleType="header" className="text-3xl md:text-xl" href="/#me" onClick={(e) => scrollToElement(e, 'me')}>
        ME
      </Action>
      {data ? (
        <>
          <Action
            styleType="header"
            as="link"
            className="text-3xl md:text-xl"
            href={`/api/auth/signout`}
            onClick={(e) => {
              toggleMenu();
              e.preventDefault();
              signOut();
            }}
          >
            SIGN OUT
          </Action>
          <Action styleType="header" as="link" className="text-3xl md:text-xl" href={`/admin`} onClick={() => toggleMenu()}>
            ADMIN
          </Action>
        </>
      ) : (
        ''
      )}
    </>
  );

  return (
    <nav className={`${scrollWindowY} z-10 pl-[60px] z-20v pr-10 py-6 fixed bg-bg-primary top-0 w-full`}>
      <div className="container mx-auto items-center flex flex-row justify-between">
        <Link className="text-nav text-zinc-800" href="/">
          IVI
        </Link>
        <div className="hidden md:block nav-group flex flex-row gap-4">{getLinks()}</div>
        <div id="hamburger" onClick={toggleMenu} className={isOpen ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-[100%]'
        } fixed shadow-navbar top-[104px] items-center justify-start left-0 right-0 z-10 gap-8 bg-bg-second flex flex-col p-16 transition-transform duration-300 ease-in-out`}
      >
        {getLinks()}
        <div className="social flex flex-col gap-2 items-center justify-center mt-4 md:mt-16">
          <h3 className="font-medium text-lg">Social</h3>
          <div className="links text-lg flex gap-6">
            <Action href="!#" as="link" styleType="link">
              LinkedIn
            </Action>
            <Action href="!#" as="link" styleType="link">
              Instagram
            </Action>
          </div>
        </div>
      </div>
    </nav>
  );
};
