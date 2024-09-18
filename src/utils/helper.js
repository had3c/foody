import * as Yup from 'yup';

const regEx = {
  name: /^[a-zA-Z]{2,90}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
  password: /^(?=\S*$).{6,50}$/
};

export function getValidationSchemas(t) {
  const userName = Yup.string()
    .matches(regEx.email, t('Error'))
    .required(t('WUN'));

  const userName2 = Yup.string()
    .matches(regEx.name, t('Error'))
    .required(t('TN2'));

  const fullName = Yup.string()
    .matches(regEx.name, t('Error'))
    .required(t('TF2'));

  const email = Yup.string()
    .matches(regEx.email, t('Email Wrong'))
    .required(t('WE'));

  const passwordLog = Yup.string()
    .matches(regEx.password, t('Password is Wrong'))
    .required(t('WP'));

  const passwordReg = Yup.string()
    .matches(regEx.password, t('Password is Wrong'))
    .required(t('P6'));

  return {
    login: Yup.object().shape({
      userName,
      passwordLog,
    }),
    register: Yup.object().shape({
      fullName,
      userName2,
      email,
      passwordReg,
      gender: Yup.string().required(t('Please select a gender')),
    })
  };
}

export const initialValues = {
  userName: '',
  userName2: '',
  fullName: '',
  email: '',
  passwordLog: '',
  passwordReg: '',
  gender: '',
};