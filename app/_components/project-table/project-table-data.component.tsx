'use client';
import { deleteProject } from '@/app/_actions/projectActions';
import { Project } from '@/app/_db/schema';
import Link from 'next/link';
// @flow
import * as React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
  projects: Project[];
};
const ProjectTableData = async ({ projects }: Props) => {
  const [allProjects, setAllProjects] = useState<Project[]>(projects);

  const handleProjectDelete = async (projectId: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this project?');

    if (confirmed) {
      const [result] = await deleteProject(projectId);
      setAllProjects((prevProjects) => prevProjects.filter((project) => project.id !== result.id));
      toast.success('Project deleted');
    } else {
    }
  };

  return (
    <>
      {allProjects.length > 0
        ? allProjects.map((project, index) => (
            <tr key={index} className="text-sm leading-5 text-gray-900">
              <td className="px-4 py-3 border-2 border-gray-500">{index + 1}</td>
              <td className="px-4 py-3 border-2 border-gray-500">{project.title}</td>
              <td className="px-4 py-3 border-2 border-gray-500">{project.createdAt.toLocaleDateString()}</td>
              <td className="px-4 py-3 border-2 border-gray-500">
                <Link href={`/admin/${project.slug}`} className="text-indigo-600 hover:text-indigo-900 mr-2">
                  Edit
                </Link>
                <button onClick={() => handleProjectDelete(project.id)} className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))
        : ''}
    </>
  );
};

export default ProjectTableData;
