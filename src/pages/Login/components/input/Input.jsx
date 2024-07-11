import React from 'react';
import { Field, ErrorMessage as Error } from 'formik';
import StyleInput from '../../style/Input.module.css';

function Input({ id, label, name, placeholder, type = 'text' }) {
    return (
        <div className={StyleInput.cont}>
            <label htmlFor={id}>{label}</label>
            <Field name={name} id={id} placeholder={placeholder} type={type} />
            <Error name={name}>{(error) => <span className={StyleInput.error}>{error}</span>}</Error>
        </div>
    );
}

export default Input;
