import axios from 'axios';

export const addUserToFS = async (userId, userData, token) => {
    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/foody-b6c94/databases/(default)/documents/users/${userId}`;

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

        console.log('User added FS', response.data);
    } catch (err) {
        console.error('Error FS', err);
    }
};
//
///
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//asdddddddddddddddddddddddddddddddddddd
//foooooooooooooooooooooody
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa