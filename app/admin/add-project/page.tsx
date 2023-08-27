"use client";
// @flow
import * as React from "react";

import { ProjectForm } from "@/app/_components/project-form/project-form";
import { Project } from "@/app/_db/schema";
import { insertProject } from "@/app/_actions/projectActions";
import Breadcrumbs from "@/app/_components/breadcrumbs/breadcrumbs.component";

type Props = {};

const Page = (props: Props) => {

  return (
    <>
      <ProjectForm type="new" />
    </>
  );
};

export default Page;
