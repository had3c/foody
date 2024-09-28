import axios from 'axios';

export const addUserToFS = async (userId, userData, token) => {
    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/users/${userId}`;

    try {
        const response = await axios.patch(firestoreUrl, {
            fields: {
                fullName: { stringValue: userData.fullName },
                gender: { stringValue: userData.gender },
                password: { stringValue: userData.passwordReg },
                email: { stringValue: userData.email },
                userName: { stringValue: userData.userName2 }
            }
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    } catch (err) {
        console.error('Error FS', err);
    }
};
