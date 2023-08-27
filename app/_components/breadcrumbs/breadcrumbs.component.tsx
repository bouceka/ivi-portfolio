'use client'
// @flow
import * as React from "react";
import { Action } from "../action/action.component";
import { usePathname, useRouter } from "next/navigation";

const capitalize = (crumb: string) =>
  crumb
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1) + " ");

const styleCrumb = (crumb: string) => {
  return capitalize(crumb.replace(/-/g, " "));
};
export const Breadcrumbs = () => {
  const pathname = usePathname();

  let currentLink = "";

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Action as="link" styleType="link" href={currentLink}>
            {styleCrumb(crumb)}
          </Action>
        </div>
      );
    });

  crumbs.unshift(
    <div className="crumb" key="home">
      <Action as="link" styleType="link" href={"/"}>
        Home
      </Action>
    </div>
  );
  return (
    <div>
      <div className="breadcrumbs">{crumbs}</div>
    </div>
  );
};

export default Breadcrumbs;
