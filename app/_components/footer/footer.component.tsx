"use client";
// @flow
import { signIn, useSession } from "next-auth/react";
import * as React from "react";
import { Action } from "../action/action.component";
type Props = {};
export const Footer = (props: Props) => {
  const { data: session } = useSession();
  return (
    <footer className=" text-center py-10 mt-20 border-t border-neutral-700 ">
      Made with love by Adam Boucek
      {!session?.user ? (
        <Action
          as="link"
          styleType="link"
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </Action>
      ) : (
        ""
      )}
    </footer>
  );
};
