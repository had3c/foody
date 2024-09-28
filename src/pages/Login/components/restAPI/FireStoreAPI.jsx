import axios from 'axios';
import { addUserToFS } from './RegisterAPI';

export const handleSubmit = async (values, { setSubmitting }) => {
    const apiKey = `${import.meta.env.VITE_API_KEY}`;
    const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    try {
        const response = await axios.post(signUpUrl, {
            email: values.email,
            password: values.passwordReg,
            displayName: values.userName2,
            returnSecureToken: true
        });
        const userId = response.data.localId;
        const token = response.data.idToken;

        await addUserToFS(userId, values, token);

    } catch (err) {
        console.error('Error', err.message);
    }
    setSubmitting(false);
};
