import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import s from './PostFormikForm.module.css';

const AddPostFormSchema = Yup.object().shape({
    text: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Maximum 50 characters')
        .required('Required')
});

const PostFormikForm = (props) => (
    <div>
        <Formik
            initialValues={{
                text: ''
            }
            }
            // validate={values => {
            //     const errors = {};
            //     if (!values.text) {
            //         errors.text = 'Required';
            //     }
            //     return errors;
            // }}
            validationSchema={AddPostFormSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setTimeout(() => {
                    props.addPost(values.text);
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                }, 400);
            }}
        >
            {({errors, isSubmitting}) => (
                <Form>
                    <div className={errors.text ? s.hasError : ''}>
                        <Field maxLength={50} as={'textarea'} name="text" placeholder={'Type your post...'}/>
                        <ErrorMessage className={s.errorMessage} name="text" component="div"/>
                    </div>
                    <button type="submit" disabled={errors.text || isSubmitting}>
                        Add post
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PostFormikForm;