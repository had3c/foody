import * as Yup from 'yup'

const regEx = {
    name: /^[a-zA-z]{2,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
    password: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
}

const userName1 = Yup.string()
    .matches(regEx.name, 'Errrrroooor')
    .required('Write Your Name')

const userName2 = Yup.string()
    .matches(regEx.name, 'Errrrroooor')
    .required('Write Your Name')


const fullName = Yup.string()
    .matches(regEx.name, 'Eror')
    .required('Write Your Full Name')

const email = Yup.string()
    .matches(regEx.email, 'Email Wrong')
    .required('Write Your Email')

const password1 = Yup.string()
    .matches(regEx.password, 'Password if Wrong')
    .required('Write Your Password')

const password2 = Yup.string()
    .matches(regEx.password, 'Password if Wrong')
    .required('Write Your Password')


export const schemas = {
    custom: Yup.object().shape({
        userName1,
        userName2,
        fullName,
        email,
        password1,
        password2,
    })
}

export const initialValues = {
    userName1: '',
    userName2: '',
    fullName: '',
    email: '',
    password: '',
    password1: '',
    password2: '',
}