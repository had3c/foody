import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { initialValues, schemas } from '../../../../utils/helper';
import Input from '../input/Input';
import StyleForm from '../../style/Form.module.css';
import LoginImg from '../../../../assets/images/loginImg.svg';
import RegisImg from '../../../../assets/images/registerImg.svg';

import { useAuth } from '../../../../context/AuthContext'

function LoginForm() {
    const { generateUserLoginDatas } = useAuth()
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className={StyleForm.pageContainer}>
            <div className={StyleForm.container}>
                <div className={`${StyleForm.imageSection} ${isRegistering ? StyleForm.register : StyleForm.login}`}>
                    <img
                        className={`${StyleForm.im} ${!isRegistering ? StyleForm.scaledImage : ''}`}
                        src={isRegistering ? RegisImg : LoginImg}
                        alt=""
                    />
                </div>
                <div className={StyleForm.formSection}>
                    <div className={StyleForm.switchButtons}>
                        <button
                            type="button"
                            className={!isRegistering ? StyleForm.active : ''}
                            onClick={() => setIsRegistering(false)}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className={isRegistering ? StyleForm.active : ''}
                            onClick={() => setIsRegistering(true)}
                        >
                            Register
                        </button>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={isRegistering ? schemas.register : schemas.login}
                        onSubmit={() => console.log('Submitted')}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                {isRegistering ? (
                                    <>
                                        <Input
                                            label="Full Name"
                                            name="fullName"
                                            id="fullName"
                                            placeholder="Write Your Full Name"
                                        />
                                        <Input
                                            label="Username"
                                            name="userName2"
                                            id="userName2"
                                            placeholder="Write Your Username"
                                        />
                                        <Input
                                            label="Email"
                                            name="email"
                                            id="email"
                                            placeholder="Write Your Email"
                                        />
                                        <Input
                                            label="Password"
                                            name="password"
                                            id="password"
                                            placeholder="Create Your Password"
                                            type="password"
                                        />
                                        <div className={StyleForm.selectField}>
                                            <label htmlFor="gender">Gender</label>
                                            <Field as="select" name="gender" id="gender">
                                                <option value="" disabled>Select</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Field>
                                            {errors.gender && touched.gender && (
                                                <div className={StyleForm.errorMessage}>{errors.gender}</div>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Input
                                            label="Username"
                                            name="userName"
                                            id="userName"
                                            placeholder="Write Your Username"
                                        />
                                        <Input
                                            label="Password"
                                            name="password"
                                            id="password"
                                            placeholder="Write Your Password"
                                            type="password"
                                        />
                                    </>
                                )}
                                <button
                                    type="submit"
                                    className={StyleForm.submitButton}
                                    onClick={() => {
                                        generateUserLoginDatas({
                                            userName: 'qwerty',
                                            password: 'asdfg'
                                        })
                                    }}
                                >
                                    {isRegistering ? 'Register' : 'Log in'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;