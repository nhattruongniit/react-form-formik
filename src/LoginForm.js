import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => {
  const validate = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = {};

    if (values.email === "") {
      errors.email = "Email is missing";
    } else if (!emailRegex.test(values.email)) {
      errors.email =
        "Email is not in the expected email address standard format";
    }
    if (values.password === "") {
      errors.password = "Password is missing";
    } else if (values.password.length < 6) {
      errors.password = "Password must be 6 characters at minimum";
    }
    return errors;
  };

  const onSubmit = (values) => {
    console.log("onSubmit: ", values);
  };

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h1>Validate form without Yup</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="col-lg-12">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={validate}
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

export default LoginForm;
