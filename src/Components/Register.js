import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

export default function Register() {
    const validate = values => {
        const onlyLetters = /^[A-Za-z]+$/;
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Please Fill...';
        } else if (!values.firstName.match(onlyLetters)) {
            errors.firstName = 'Only Characters';
        }

        if (!values.lastName) {
            errors.lastName = 'Please Fill...';
        } else if (!values.lastName.match(onlyLetters)) {
            errors.lastName = 'Only Characters';
        }

        if (!values.email) {
            errors.email = 'Please Fill...';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.age) {
            errors.age = 'Please Fill...';
        } else if (values.age < 18) {
            errors.age = 'You must be at least 18';
        }

        if (!values.password) {
            errors.password = 'Please Fill...';
        } else if (values.password.length >= 10 || values.password.length < 4) {
            errors.password = 'max letters 10 min letters 4';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Please Fill...';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Password Doesn't match";
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <div className='flex items-center justify-center h-screen'>

            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-start items-center w-1/2 h-full bg-orange-300 flex-wrap'>
                <h1 className='text-center text-white mb-5 text-2xl mt-6'>Registration</h1>

                <div className='w-full flex justify-evenly align-center h-32 '>
                    <label htmlFor="firstName" className='mt-5 text-white'>FirstName</label>

                    <div className='flex flex-col'>
                        <input
                            className='border-amber-400 border-2 h-8 w-44 mt-2'
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    </div>

                    <label
                        htmlFor="lastName"
                        className='mt-3 text-white'>LastName
                    </label>
                    <div className='flex flex-col'>
                        <input
                            className='border-amber-400 border-2 h-8 w-44 mt-2'
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    </div>
                </div>
                <div className='w-full flex justify-evenly align-center h-32'>
                    <label
                        htmlFor="email"
                        className='mt-3 text-white'>Email
                    </label>
                    <div className='flex flex-col'>
                        <input
                            className='border-amber-400 border-2 h-8 w-44 mt-2'
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </div>
                    <label
                        htmlFor="age"
                        className='mt-3 text-white'>Age
                    </label>
                    <div className='flex flex-col'>
                        <input
                            className='border-amber-400 border-2 h-8 w-44 mt-2'
                            id="age"
                            name="age"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                        />
                        {formik.errors.age ? <div>{formik.errors.age}</div> : null}
                    </div>
                </div>

                <div className='w-full flex justify-evenly align-center h-32'>
                    <label
                        htmlFor="password"
                        className='mt-3 text-white'>Password
                    </label>
                    <div className='flex flex-col'>
                        <input
                            className='border-amber-400 border-2 h-8 w-44 mt-2'
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </div>
                    <label
                        htmlFor="confirmPassword"
                        className='mt-3 text-white'>Confirm Password
                    </label>
                    <div className='flex flex-col'>
                        <input
                            className='border-amber-400 border-2 h-8 w-44 mt-2'
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                        {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
                    </div>
                </div>

                <button
                    type="submit"
                    className='mt-10 w-32 h-12 bg-slate-500 rounded-lg text-yellow-50 hover:text-red-300 hover:bg-white'>Submit
                </button>
            </form>
            <Link to={'/home'} className='ml-20 bg-blue-500 text-white p-5 rounded hover:bg-blue-600 '>Home</Link>
        </div>
    );
};


