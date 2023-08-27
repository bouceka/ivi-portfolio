"use client";

import { useRouter } from "next/navigation";
import { Action } from "../action/action.component";
import { Input } from "../input/input.component";
import * as yup from "yup";
import { Formik, FormikHelpers } from "formik";
import email from "next-auth/providers/email";
import { useState } from "react";
import { signIn } from "next-auth/react";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const formData = {
    username: "",
    password: "",
  };

  const handleForm = async (
    values: typeof formData,
    actions: FormikHelpers<typeof formData>
  ) => {
    try {
      const res = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/admin");
    } catch (error) {
      console.log(error);
    }
    actions.resetForm();
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => handleForm(values, actions)}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          isSubmitting,
          dirty,
          isValid,
          errors,
        }) => {
          return (
            <form
              className="bg-white shadow-md rounded-lg px-10 py-8 mb-4"
              onSubmit={handleSubmit}
            >
              <h2 className="text-center font-bold text-2xl mb-4">Login</h2>
              <div className="mb-6">
                <Input
                  onChange={handleChange}
                  value={values.username}
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <Input
                  onChange={handleChange}
                  value={values.password}
                  type="password"
                  name="password"
                  label="Password"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <Action styleType="primary" as="button">
                  Sign In
                </Action>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
