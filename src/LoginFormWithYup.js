import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginFormWithYup = () => {
  const onSubmit = (values) => {
    console.log("onSubmit: ", values);
  };

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h1>Validate form with custom validate Yup</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="col-lg-12">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email(
                    "Email is not in the expected email address standard format"
                  )
                  .required("Email is missing"),
                password: Yup.string()
                  .required("Password is required")
                  .min(6, "Password must be 6 characters at minimum"),
              })}
              onSubmit={onSubmit}
            >
              {({ errors }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Log in
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormWithYup;
