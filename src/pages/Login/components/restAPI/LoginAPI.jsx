import axios from 'axios';
import { toast } from 'react-toastify';

export const handleLoginSubmit = async (values, setSubmitting, t, generateUserLoginDatas, navigate) => {
    const apiKey = "AIzaSyDVi1kKlEiv3cmavo83rlOc20ki56PnnHw";
    const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    console.log(values)
    try {
        const response = await axios.post(signInUrl, {
            email: values.userName,
            password: values.password,
            returnSecureToken: true
        });

        console.log('User logged in', response.data);

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
///
//aaaaaaaaaaaaaaaaaaaa
//fffffffffffffffffffff/
//ffffffffffffffffff
///
///
// test('should first', () => { second })