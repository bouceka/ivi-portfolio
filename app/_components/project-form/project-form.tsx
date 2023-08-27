'use client';

// @flow
import { Input } from '@/app/_components/input/input.component';
import { Project } from '@/app/_db/schema';
import { Formik, FormikHelpers } from 'formik';
import * as React from 'react';
import { useState } from 'react';
import * as yup from 'yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalSpinner } from '@/app/_components/global-spinner/global-spinner.component';
import { Textarea } from '@/app/_components/textarea/textarea.component';
import { Action } from '@/app/_components/action/action.component';
import { Markdown } from '../markdown/markdown';
import { insertProject, updateProject } from '@/app/_actions/projectActions';
import { useSession } from 'next-auth/react';

type NewProjectProps = {
  type: 'new';
};
type EditProjectProps = {
  type: 'edit';
  slug: string;
  project: Project;
};

const validationSchema = yup.object().shape({
  title: yup.string().required('title is required'),
  slug: yup.string().required('slug is required'),
  excerpt: yup.string().required(),
  categories: yup.string().required(),
  featuredImageUrl: yup.string().required(),
  markdown: yup.string().required(),
});

type ProjectFormProps = NewProjectProps | EditProjectProps;

type FormValue = object & Omit<Project, 'id' | 'userId'>;

export const ProjectForm = async (props: ProjectFormProps) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const handleForm = async (values: FormValue, actions: FormikHelpers<FormValue>) => {
    try {
      setLoading(true);
      if (!session) throw Error('Not logged in');
      if (props.type === 'new') {
        const state = await insertProject({
          ...values,
          userId: session?.user.id,
        });
        if (state.length === 0) throw new Error('Could not update the project');
      }
      if (props.type === 'edit') {
        const state = await updateProject(props.project.id, {
          ...values,
          userId: session?.user.id,
        });
        if (state.length === 0) throw new Error('Could not update the project');
      }
      toast.success('Message sent');
      setLoading(false);
      actions.resetForm();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        actions.resetForm();
      } else {
        toast.error('Error Occurred');
        actions.resetForm();
      }
      setLoading(false);
    }
  };

  const formData = {
    featuredImageUrl: props.type === 'edit' ? props.project.featuredImageUrl : '',
    excerpt: props.type === 'edit' ? props.project.excerpt : '',
    title: props.type === 'edit' ? props.project.title : '',
    categories: props.type === 'edit' ? props.project.categories : '',
    slug: props.type === 'edit' ? props.project.slug : '',
    createdAt: props.type === 'edit' ? props.project.createdAt : new Date(),
    markdown: props.type === 'edit' ? props.project.markdown : '',
  };
  return (
    <div className="mt-20 container lg:w-[57.5rem] mx-auto">
      {loading ? <GlobalSpinner /> : ''}
      <ToastContainer />
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => handleForm(values, actions)}
      >
        {({ values, handleSubmit, handleChange, isSubmitting, dirty, isValid, errors }) => {
          return (
            <div className="flex-auto justify-center flex-row">
              <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} value={values.title} required label="Title" name="title" />
                <Input onChange={handleChange} value={values.slug} required label="Slug" name="slug" />
                <Input onChange={handleChange} value={values.excerpt} required label="Excerpt" name="excerpt" />
                <Input onChange={handleChange} value={values.categories} required label="Categories" name="categories" />
                <Input onChange={handleChange} value={values.featuredImageUrl} required label="Featured Image" name="featuredImageUrl" />
                <Textarea onChange={handleChange} value={values.markdown} required label="Content" name="markdown" />
                <Action as="button" className="w-full" styleType="outline">
                  Send Message
                </Action>
                <Markdown content={values.markdown} />
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
