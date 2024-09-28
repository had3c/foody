import axios from 'axios';
import { toast } from 'react-toastify';

export const handleLoginSubmit = async (values, setSubmitting, t, generateUserLoginDatas, navigate) => {
    const apiKey = `${import.meta.env.VITE_API_KEY}`;
    const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    try {
        const response = await axios.post(signInUrl, {
            email: values.userName,
            password: values.password,
            returnSecureToken: true
        });

        const userId = response.data.localId;
        const token = response.data.idToken;

        generateUserLoginDatas({ userId, token });
        navigate("/");

        toast.success(t('T4'));
    } catch (err) {
        console.error('Error', err.message);
        toast.error(t("T5"));
    }
    setSubmitting(false);
};
