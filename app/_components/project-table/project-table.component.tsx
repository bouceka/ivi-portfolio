import { deleteProject, getAllProjects } from '@/app/_actions/projectActions';
import { Project } from '@/app/_db/schema';
import Link from 'next/link';
// @flow
import * as React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ProjectTableData from './project-table-data.component';

const ProjectTable = async () => {
  const projects = await getAllProjects(null);
  return (
    <>
      <ToastContainer />
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr className="text-sm leading-4 text-gray-500 uppercase tracking-wider">
            <th className="px-4 py-3 border-2 border-gray-500"> </th>
            <th className="px-4 py-3 border-2 border-gray-500">Title</th>
            <th className="px-4 py-3 border-2 border-gray-500">Date Created</th>
            <th className="px-4 py-3 border-2 border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Suspense
            fallback={
              <tr className="">
                {/* Shimmering effect */}
                <td className="px-4 py-3 border-2 border-gray-500">Loading...</td>
                <td className="px-4 py-3 border-2 border-gray-500">Loading...</td>
                <td className="px-4 py-3 border-2 border-gray-500">Loading...</td>
                <td className="px-4 py-3 border-2 border-gray-500">Loading...</td>
              </tr>
            }
          >
            <ProjectTableData projects={projects} />
          </Suspense>
        </tbody>
      </table>
    </>
  );
};

export default ProjectTable;
