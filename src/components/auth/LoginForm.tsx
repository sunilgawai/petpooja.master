import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => (
    <div className='w-25 h-25'>
        <h1>Welcom to Petpooja</h1>
        <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
                const errors = {
                    username: '',
                    password: ''
                };
                if (!values.username) {
                    errors.username = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
                ) {
                    errors.username = 'Invalid username';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="username" name="username" />
                    <ErrorMessage name="username" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default LoginForm;