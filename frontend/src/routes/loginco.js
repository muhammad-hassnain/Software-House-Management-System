/* Write code to create a login form using formic and valide it using yup, in the login form ask for email and password*/

/* Write code to create a login form using formic and valide it using yup, in the login form ask for email and password*/

import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';0
import {Routes, Route, Link} from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        validationSchema: Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Must be 8 characters or more')
            .required('Required'),
        }),
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor="password">Password</label>
        <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">Submit</button>
        </form>
    );
    };

export default Login;
