import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    //validation
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:3001/login", values).then((res) => {
        console.log(res);
        if(res.statusText == "OK")
        {
                console.log('Successful login');
                navigate("/hrHome");
        }
                
        else
        {
                console.log('Login failed');
        }
      });
      
    },
  });
  console.log(formik.errors);
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 p-10 bg-sky-100 rounded-2xl">
        <h1 className="text-3xl my-10 items-center">Client LogIn</h1>
        <form
          action=""
          className="flex flex-col "
          onSubmit={formik.handleSubmit}
        >
          <label
            htmlFor="name"
            className={`text-gray-900 block pb-2 ${
              formik.touched.name && formik.errors.name ? "text-red-400" : ""
            }`}
          >
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : "Name:"}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label
            htmlFor="email"
            className={`text-gray-900 block pb-2 ${
              formik.touched.email && formik.errors.email ? "text-red-400" : ""
            }`}
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email:"}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="ml-2 border border-gray-400 rounded "
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label
            htmlFor="password"
            className={`text-gray-900 block pb-2 ${
              formik.touched.password && formik.errors.password
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : "Password:"}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-2/4 hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
