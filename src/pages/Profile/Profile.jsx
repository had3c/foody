import { useRef, useEffect, useState } from 'react';
import style from './style/Profile.module.css';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import upload from '../../assets/images/uploadFile.svg';
import axios from 'axios';

export default function Profile() {
  const { t, i18n } = useTranslation();
  const inputFileRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [users, setUsers] = useState([]);

  const getContactValue = () => {
    switch (i18n.language) {
      case 'az':
        return '+994';
      case 'en':
        return '+44';
      case 'fr':
        return '+33';
      default:
        return '+1';
    }
  };

  const uploadImageToFirebase = async (file) => {
    const folderName = 'profile_images';
    const pictureName = `${Date.now()}_${file.name}`;
    const fileName = encodeURIComponent(pictureName);
    setFileName(fileName);

    const url = `https://firebasestorage.googleapis.com/v0/b/${import.meta.env.VITE_PROJECT_ID}.appspot.com/o/${folderName}%2F${fileName}?uploadType=media`;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(url, file, {
        headers: {
          'Content-Type': file.type,
        },
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageURL = reader.result;
      };
      await uploadImageToFirebase(file);
      reader.readAsDataURL(file);
    }
  };
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.userId;
  const userURL = `https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/users/${userId}`;
  const sendUserData = async (values) => {
    const contact = getContactValue() + values.contact;
    const userData = {
      fields: {
        imageURL: { stringValue: `https://firebasestorage.googleapis.com/v0/b/${import.meta.env.VITE_PROJECT_ID}.appspot.com/o/profile_images%2F${fileName}?alt=media` },
        address: { stringValue: values.address },
        contact: { stringValue: contact.toString() },
        userName: { stringValue: values.username },
        fullName: { stringValue: values.fullName },
        email: { stringValue: values.email },
        gender: { stringValue: users.gender},
        password: { stringValue: users.password},
      },
    };
    try {
      await axios.patch(userURL, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error sending user data to Firestore:', error);
    }
    window.location.reload()
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(userURL);
      const userInformation = {
        gender: response.data.fields.gender.stringValue,
        password: response.data.fields.password.stringValue,
      };
      setUsers(userInformation);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleImageClick = () => {
    inputFileRef.current.click();
  };

  const validationSchema = Yup.object().shape({
    contact: Yup.number()
      .required(t('Contact Required')),
    username: Yup.string().required(t('Username Required')),
    fullName: Yup.string().required(t('Fullname Required')),
    email: Yup.string().email(t('Email is invalid')).required(t('Email Required')),
    address: Yup.string().required(t('Address Required')),
  });


  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    await sendUserData(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={style.userProfile}>
      <h2>{t('Profile')}</h2>
      <div className={style.upload} onClick={handleImageClick}>
        <img src={upload} alt="" />
        <p>{t('upload')} </p>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputFileRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <div className={style.deleteImg}>
      </div>
      <div className={style.form}>
        <Formik
          initialValues={{
            contact: '',
            username: '',
            fullName: '',
            email: '',
            address: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={style.formik}>
                <div>
                  <label>{t('Contact')}</label>
                  <Field type="number" name="contact" placeholder={t('+44')} className={style.input} />
                  <ErrorMessage name="contact" component="div" className={style.error} />

                  <label>{t('User Name')}</label>
                  <Field type="text" name="username" placeholder={t('User Name')} className={style.input} />
                  <ErrorMessage name="username" component="div" className={style.error} />

                  <label>{t('Full Name')}</label>
                  <Field type="text" name="fullName" placeholder={t('Full Name')} className={style.input} />
                  <ErrorMessage name="fullName" component="div" className={style.error} />
                </div>

                <div>
                  <label>{t('Email')}</label>
                  <Field type="email" name="email" placeholder={t('Email')} className={style.input} />
                  <ErrorMessage name="email" component="div" className={style.error} />

                  <label>{t('Address')}</label>
                  <Field type="text" name="address" placeholder={t('Address')} className={style.input} />
                  <ErrorMessage name="address" component="div" className={style.error} />

                  <button type="submit" disabled={isSubmitting}>
                    {t('Save')}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

