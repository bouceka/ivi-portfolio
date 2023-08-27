'use client';
// @flow
import * as React from 'react';
import { Input } from '../input/input.component';
import { Textarea } from '../textarea/textarea.component';
import { Action } from '../action/action.component';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { sendEmail } from '@/app/_utils/email.util';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalSpinner } from '../global-spinner/global-spinner.component';

export type FormValue = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

export const WorkTogether = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(1),
    email: yup.string().email().required('Email is required'),
    phoneNumber: yup.number(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });

  const formData = {
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  };

  return (
    <div className="sm:container lg:w-[57.5rem] mx-auto">
      {loading ? <GlobalSpinner /> : ''}
      <ToastContainer />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-8 font-light">
          <p className="text-lg	">Looking for high quality marketing specialist with a personal touch?</p>
          <p className="text-lg	">Fill up the form with details and I will help you.</p>
          <div className="social flex flex-col gap-6 items-center justify-center mt-4 md:mt-16">
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
        <div className="form basis-3/5">
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              try {
                setLoading(true);
                if (await sendEmail(values)) {
                  toast.success('Message sent');
                } else {
                  toast.error('Error Occurred');
                }
                setLoading(false);
                actions.resetForm();
              } catch (error) {
                actions.resetForm();
              }
            }}
          >
            {({ values, handleSubmit, handleChange, isSubmitting, dirty, isValid, errors }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="md:flex gap-8">
                    <Input onChange={handleChange} value={values.name} required label="Name" name="name" />
                    <Input onChange={handleChange} value={values.email} required label="Email" name="email" />
                  </div>
                  <div className="md:flex gap-8">
                    <Input onChange={handleChange} value={values.phoneNumber} required label="Phone Number" name="phoneNumber" />
                    <Input onChange={handleChange} value={values.subject} required label="Subject" name="subject" />
                  </div>
                  <Textarea onChange={handleChange} value={values.message} required label="Message" name="message" />
                  <Action as="button" className="w-full" styleType="outline">
                    Send Message
                  </Action>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
