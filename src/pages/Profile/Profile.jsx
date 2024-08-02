import { useRef, useEffect } from 'react';
import style from './style/Profile.module.css';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useProfile } from '../../context/ProfileContext';
import upload from '../../assets/images/uploadFile.svg';
import avatar from '../../assets/icons/avatar.svg'

export default function Profile() {
  const { t } = useTranslation();
  const { profileImage, fullName, updateProfile,setProfileImage,userData, setUserData  } = useProfile();
  const inputFileRef = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage') || avatar;
    const savedName = localStorage.getItem('fullName') || '';
    updateProfile(savedImage, savedName);
  }, [updateProfile]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageURL = reader.result;
        setProfileImage(imageURL); 
        localStorage.setItem('profileImage', imageURL); 
      };
      reader.readAsDataURL(file); 
    }
  };

 const handleImageClick = () => {
    inputFileRef.current.click();
  };

const handleDeleteImage = () => {
  setProfileImage(avatar);
  localStorage.removeItem('profileImage'); 
 
};

  const dataSubmitting = (values) => {
    const isDuplicate = userData.some(data => 
      data.contact === values.contact &&
      data.username === values.username &&
      data.fullName === values.fullName &&
      data.email === values.email &&
      data.address === values.address
    );

    if (!isDuplicate) {
      setUserData([...userData, values]); 
      updateProfile(profileImage, values.fullName); 
    } 
  };

  console.log(userData)
  const validationSchema = Yup.object().shape({
    contact: Yup.string()
      .matches(/^\+994\d{7}$/, t('contact.invalid'))
      .required(t('Contact Required')),
    username: Yup.string().required(t('Write Your User Name')),
    fullName: Yup.string().required(t('Write Your Full Name')),
    email: Yup.string().email(t('email.invalid')).required(t('Write Your E-mail')),
    address: Yup.string().required(t('Address Required')),
  });


  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    dataSubmitting(values);
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
              <button onClick={handleDeleteImage}>{t('Delete Profile Photo')}</button>
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
                      <Field type="text" name="contact" placeholder={t('+44')} className={style.input} />
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


