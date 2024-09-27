import React, { useState } from 'react';
import { Field, ErrorMessage as Error } from 'formik';
import StyleInput from '../../style/Input.module.css';
import EyeInput from '../../../../assets/images/remove_red_eye.svg';
import EyeSlashInput from '../../../../assets/images/eye_closed_icon_173166.png';

function Input({ id, label, name, placeholder, type = 'text', autoComplete }) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const hidePassword = () => {
        setPasswordVisible(false);
    };

    const inputType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

    return (
        <div className={StyleInput.cont}>
            <label htmlFor={id}>{label}</label>
            <div className={StyleInput.inputWrapper}>
                <Field
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    type={inputType}
                    className={StyleInput.inputField}
                    autoComplete={autoComplete}
                />
                {type === 'password' && (
                    <img
                        src={isPasswordVisible ? EyeSlashInput : EyeInput}
                        alt=""
                        className={StyleInput.eyeIcon}
                        onClick={togglePasswordVisibility}
                        onMouseLeave={hidePassword}
                    />
                )}
            </div>
            <Error name={name}>{(error) => <span className={StyleInput.error}>{error}</span>}</Error>
        </div>
    );
}

export default Input;