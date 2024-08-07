import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { initialValues, getValidationSchemas } from '../../../../utils/helper';
import Input from '../input/Input';
import StyleForm from '../../style/Form.module.css';
import LoginImg from '../../../../assets/images/loginImg.svg';
import RegisImg from '../../../../assets/images/registerImg.svg';

import { useAuth } from '../../../../context/AuthContext'

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const { t } = useTranslation();
    const schemas = getValidationSchemas(t);

    const { generateUserLoginDatas } = useAuth();
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

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
                        onSubmit={(values) => {
                            const userData = {
                                fullName: values.fullName,
                                userName: values.userName2,
                                email: values.email,
                                password: values.passwordReg,
                                gender: values.gender
                            };
                            console.log('User Data:', userData);

                            if (!isRegistering) {
                                generateUserLoginDatas({
                                    userName: values.userName,
                                    password: values.passwordLog
                                });
                                navigate("/");
                            } else {
                                setIsRegistering(false);
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
                                    </>
                                ) : (
                                    <>
                                        <Input
                                            label={t("User Name")}
                                            name="userName"
                                            id="userName"
                                            placeholder={t("PU")}
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
                                    className={StyleForm.submitButton}
                                >
                                    {isRegistering ? t('Register') : t('Login')}
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