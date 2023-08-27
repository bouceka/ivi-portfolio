// @flow
import * as React from "react";

import { ProjectForm } from "@/app/_components/project-form/project-form";
import { Project } from "@/app/_db/schema";
import {
  getProjectBySlug,
  insertProject,
  updateProject,
} from "@/app/_actions/projectActions";

type Props = {};

const Page = async ({ params }: { params: { slug: string } }) => {
  const project: Project = await getProjectBySlug(params.slug);

  return (
    <>
        <ProjectForm slug={params.slug} project={project} type="edit" />
    </>
  );
};

export default Page;
