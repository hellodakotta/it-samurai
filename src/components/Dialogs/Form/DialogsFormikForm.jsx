import React from 'react';
import s from './DialogsFormikForm.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";


const DialogsFormikForm = (props) => (

    <div>
        <Formik
            initialValues={{
                message: ''
            }
            }
            validate={values => {
                const errors = {};

                if (!values.message) {
                    errors.message = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setTimeout(() => {
                    console.log(props)
                    props.addMessage(values.message, props.userId);
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm({values: ''})
                }, 400);
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <Field as={'textarea'} name="message" placeholder={'Type your message...'}/>
                        <ErrorMessage name="message" component="div"/>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Add Message
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);


export default DialogsFormikForm;