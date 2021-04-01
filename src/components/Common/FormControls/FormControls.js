import React from 'react';
import s from './FormControls.module.css';

export const FormControl = Element => ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControls + ' ' + (hasError ? s.error : '')}>
            <Element {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}