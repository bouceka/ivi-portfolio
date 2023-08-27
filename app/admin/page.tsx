// @flow
import * as React from 'react';
import { Action } from '../_components/action/action.component';
import 'react-toastify/dist/ReactToastify.css';
import ProjectTable from '../_components/project-table/project-table.component';

const Page = () => {

  return (
    <>
      <div className="flex flex-col items-end gap-8">
        <Action styleType="outline" href={'/admin/add-project'} as={'link'}>
          Add a project
        </Action>
        <ProjectTable />
      </div>
    </>
  );
};

export default Page;


