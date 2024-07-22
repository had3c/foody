import { useRef } from 'react';
import style from './style/Profile.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import upload from '../../assets/images/uploadFile.svg'
import uploadFile from '../../assets/images/uploadMob.svg'

export default function Profile() {
  const inputFileRef = useRef(null);
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
  };
  const handleImageClick = () => {
    inputFileRef.current.click(); 
  };

  const validationSchema = Yup.object().shape({
    contact: Yup.string()
      .matches(/^\+994\d{7}$/, 'Must start with +994 and be followed by 7 digits')
      .required('Contact number is required'),
    username: Yup.string().required('Username is required'),
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
  });

  return <div className={style.userProfile}>
    <h2>Profile</h2>
    <img src={upload} alt="" className={style.upload}   onClick={handleImageClick}/>
    <img src={uploadFile} alt="" className={style.uploadMob} />
    <input
      type="file"
      accept="image/*"
      ref={inputFileRef}
      style={{ display: 'none' }}
      onChange={handleFileSelect}
    />

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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={style.formik}>
            <div>
              <label>Contact</label>
              <Field type="text" name="contact" placeholder="+994" className={style.input} />
              <ErrorMessage name="contact" component="div" className={style.error} />

              <label>Username</label>
              <Field type="text" name="username" placeholder="Username" className={style.input} />
              <ErrorMessage name="username" component="div" className={style.error} />

              <label>Full Name</label>
              <Field type="text" name="fullName" placeholder="Full Name" className={style.input} />
              <ErrorMessage name="fullName" component="div" className={style.error} />
            </div>

            <div>
              <label>Email</label>
              <Field type="email" name="email" placeholder="Email" className={style.input} />
              <ErrorMessage name="email" component="div" className={style.error} />

              <label>Address</label>
              <Field type="text" name="address" placeholder="Address" className={style.input} />
              <ErrorMessage name="address" component="div" className={style.error} />

              <button type="submit" disabled={isSubmitting}>
                Save
              </button>
            </div>  
            </div>
            
          </Form>
        )}
      </Formik>

    </div>
  </div>;
}
