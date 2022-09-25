import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import s from "../../../Profile/MyPosts/PostFormikForm/PostFormikForm.module.css";

import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Incorrect email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Min 6 symbols')
        .required('Required'),
});

const LoginFormikForm = ({userLogin}) => (
    <div>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }
            }
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            validationSchema={LoginFormSchema}
            onSubmit={(values, {setSubmitting, setStatus}) => {
                setTimeout(() => {
                    userLogin(values.email, values.password, values.rememberMe, false, setStatus);
                    alert(JSON.stringify(values, null, 2));
                    
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({status, touched, errors,isSubmitting}) => (
                <Form>
                    <div className={touched.email && errors.email ? s.hasError : ''}>
                        <Field type="text" name="email"/>
                        <ErrorMessage className={s.errorMessage} name="email" component="div"/>
                    </div>
                    <div className={touched.password && errors.password ? s.hasError : ''}>
                        <Field  type="password" name="password"/>
                        <ErrorMessage className={s.errorMessage} name="password" component="div"/>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} /> Remember me
                    </div>

                    <div>{status}</div>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default LoginFormikForm;