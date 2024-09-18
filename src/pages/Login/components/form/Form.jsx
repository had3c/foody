import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { initialValues, getValidationSchemas } from '../../../../utils/helper';
import Input from '../input/Input';
import StyleForm from '../../style/Form.module.css';
import LoginImg from '../../../../assets/images/loginImg.svg';
import RegisImg from '../../../../assets/images/registerImg.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../../../context/AuthContext';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

function LoginForm() {
    const addUserToFS = async (userId, userData, token) => {
        const firestoreUrl = `https://firestore.googleapis.com/v1/projects/ttttesst-87d6e/databases/(default)/documents/users/${userId}`;


        try {
            const response = await axios.patch(firestoreUrl, {
                fields: {
                    fullName: { stringValue: userData.fullName },
                    gender: { stringValue: userData.gender },
                    password: { stringValue: userData.passwordReg },
                    email: { stringValue: userData.email },
                    userName: { stringValue: userData.userName2 }
                }
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('User added FS', response.data);
        } catch (err) {
            console.error('Error FS', err);

        }
    };
    // recaptcha
    const onChange = () => {
    };
    // 

    const handleSubmit = async (values, { setSubmitting }) => {
        const apiKey = "AIzaSyBlf7gaOQzefjcGu2PME6MjfmQaIiOZaWI";
        const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
        console.log(values)
        try {
            const response = await axios.post(signUpUrl, {
                email: values.email,
                password: values.passwordReg,
                displayName: values.userName2,
                returnSecureToken: true
            });

            console.log('User registered', response.data);

            const userId = await response.data.localId;
            const token = await response.data.idToken;


            await addUserToFS(userId, values, token);



        } catch (err) {
            console.error('Error', err.message);


        }
        setSubmitting(false);
    };

    const handleLoginSubmit = async (values, setSubmitting) => {
        const apiKey = "AIzaSyBlf7gaOQzefjcGu2PME6MjfmQaIiOZaWI";
        const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        console.log(values)
        try {
            const response = await axios.post(signInUrl, {
                email: values.userName,
                password: values.password,
                returnSecureToken: true
            });

            console.log('User logged in', response.data);

            const userId = await response.data.localId;
            const token = await response.data.idToken;

            generateUserLoginDatas({ userId, token });
            navigate("/");

            toastiyLog(t('T4'));
        } catch (err) {
            console.error('Error', err.message);
            toast.error(t("T5"));
        }
        setSubmitting(false);
    };



    const { t } = useTranslation();
    const schemas = getValidationSchemas(t);

    const [disabledBtn, setDisableBtn] = useState(false);
    const { generateUserLoginDatas } = useAuth();
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const toastiyLog = (message) => toast.success(message);
    const toasityReg = () => toast.success(t("T3"));

    const handleLogin = async (userData, setSubmitting) => {

        await handleLoginSubmit(userData, setSubmitting)

    };

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
                            {t('Login')}
                        </button>
                        <button
                            type="button"
                            className={isRegistering ? StyleForm.active : ''}
                            onClick={() => setIsRegistering(true)}
                        >
                            {t('Register')}
                        </button>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={isRegistering ? schemas.register : schemas.login}
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            if (!isRegistering) {
                                const userData = {
                                    userName: values.userName,
                                    password: values.passwordLog,
                                };
                                handleLogin(userData, setSubmitting);
                            } else {
                                handleSubmit(values, { setSubmitting });
                                setDisableBtn(true);
                                const loadingToast = toast.loading(t('T6'));

                                setTimeout(() => {
                                    toast.dismiss(loadingToast);
                                    setIsRegistering(false);
                                    setDisableBtn(false);
                                    toasityReg();
                                    resetForm();
                                }, 2000);
                            }
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={StyleForm.for}>
                                {isRegistering ? (
                                    <>
                                        <Input
                                            label={t("Full Name")}
                                            name="fullName"
                                            id="fullName"
                                            placeholder={t("PN")}
                                        />
                                        <Input
                                            label={t("User Name")}
                                            name="userName2"
                                            id="userName2"
                                            placeholder={t("PU")}
                                        />
                                        <Input
                                            label={t("E-mail")}
                                            name="email"
                                            id="email"
                                            placeholder={t("PE")}
                                        />
                                        <Input
                                            label={t("Password")}
                                            name="passwordReg"
                                            id="passwordReg"
                                            type="password"
                                            placeholder={t("PP")}
                                        />
                                        <div className={StyleForm.formRow}>
                                            <div className={StyleForm.selectField}>
                                                <label htmlFor="gender">{t("Gender")}</label>
                                                <Field as="select" name="gender" id="gender">
                                                    <option value="" disabled>{t('Select')}</option>
                                                    <option value="male">{t('Male')}</option>
                                                    <option value="female">{t('Female')}</option>
                                                    <option value="other">{t('Other')}</option>
                                                </Field>
                                                {errors.gender && touched.gender && (
                                                    <div className={StyleForm.errorMessage}>{errors.gender}</div>
                                                )}
                                            </div>
                                            <div className={StyleForm.recaptchaContainer}>
                                                <ReCAPTCHA
                                                    sitekey="6LeNHikqAAAAAKyGkMVWiiX6fSi1hpSng0vQ9aRY"
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Input
                                            // label={t("User Name")}
                                            name="userName"
                                            id="userName"
                                            // placeholder={t("PU")}
                                            label={t("E-mail")}
                                            type='email'

                                            placeholder={t("PE")}
                                        />
                                        <Input
                                            label={t("Password")}
                                            name="passwordLog"
                                            id="passwordLog"
                                            type="password"
                                            placeholder={t("PP2")}
                                        />
                                    </>
                                )}
                                <button
                                    type="submit"
                                    className={disabledBtn ? `${StyleForm.submitButton} ${StyleForm.disableBtn}` : StyleForm.submitButton}
                                    disabled={disabledBtn}
                                >
                                    {isRegistering ? t('Register') : t('Login')}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default LoginForm;
