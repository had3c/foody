import React from 'react'
import { Field, ErrorMessage as Error } from 'formik'
import StyleInput from '../../style/Input.module.css'

function Input({ id, label, name, placeholder }) {
    return (
        <div className={StyleInput.cont}>
            <label
                htmlFor={id}>
                {label}
            </label>
            <Field name={name}
                id={id}
                placeholder={placeholder} />
            <Error name={name} >
                {(error) => <span>{error}</span>}
            </Error>
        </div>
    )
}

export default Input