import * as Yup from 'yup';

const regEx = {
    name: /^[a-zA-Z]{2,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
    password: /^(?=\S*$).{6,16}$/
};

const userName = Yup.string()
    .matches(regEx.name, 'Error')
    .required('Write Your Name');

const userName2 = Yup.string()
    .matches(regEx.name, 'Error')
    .required('Write Your Name');


const fullName = Yup.string()
    .matches(regEx.name, 'Error')
    .required('Write Your Full Name');

const email = Yup.string()
    .matches(regEx.email, 'Email Wrong')
    .required('Write Your Email');

const password = Yup.string()
    .matches(regEx.password, 'Password is Wrong')
    .required('Write Your Password');

export const schemas = {
    login: Yup.object().shape({
        userName,
        password,
    }),
    register: Yup.object().shape({
        fullName,
        userName2,
        email,
        password,
    })
};

export const initialValues = {
    userName: '',
    userName2: '',
    fullName: '',
    email: '',
    password: '',
};
