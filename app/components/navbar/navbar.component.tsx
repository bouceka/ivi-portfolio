// @flow
import Link from 'next/link';
import * as React from 'react';
import { Action } from '../action/action.component';
type Props = {};
export const Navbar = (props: Props) => {
  return (
    <nav className='pl-[60px] pr-10 py-6 fixed w-full'>
      <div className='container mx-auto items-center flex flex-row justify-between'>
        <Link className='text-nav text-zinc-800' href='/'>
          IVI
        </Link>
        <div className='nav-group flex flex-row gap-4'>
          <Action as='link' styleType='header' className='text-xl' href='#work'>
            WORK
          </Action>
          <Action as='link' styleType='header' className='text-xl' href='#me'>
            ME
          </Action>
        </div>
      </div>
    </nav>
  );
};
