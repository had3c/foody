import style from './style/Profile.module.css'
import upload from '../../assets/images/uploadFile.svg'
import uploadFile from '../../assets/images/uploadMob.svg'

export default function Profile() {
  return <div className={style.userProfile}>
    <h2>Profile</h2>
    <img src={upload} alt=""  className={style.upload}/>
    <img src={uploadFile} alt="" className={style.uploadMob}/>
    <div className={style.form}>
      <form>
         <label>Contact</label>
        <input type="number" placeholder='+994' />
        <label>Username</label>
        <input type="text" placeholder='Username' />
         <label>Full Name</label>
        <input type="text" placeholder='Full Name' />
      </form>
       
      <form> 
        <label>Email</label>
        <input type='email' placeholder='Email' />
         <label>Address</label>
        <input type="text" placeholder='Address' />
     
        <button>Save</button>
      </form>
    </div>
  </div>;
}
