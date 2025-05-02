import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { saveToken } from '../utils/TokenStorage';
import { useEffect } from 'react';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: '487602687272-blld28qfn85evoe950dj57gcadvi6744.apps.googleusercontent.com',
        androidClientId: '487602687272-71pc1v0ftr1rt7j7gigktrd08hec5hk7.apps.googleusercontent.com',
        iosClientId: '487602687272-c5m2fajd0qe5tshf7ufln52mo77c4k57.apps.googleusercontent.com',
    });
    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;

            saveToken('google_access_token', authentication?.accessToken);

            // Send to backend when DB is set up
            console.log('Access Token:', authentication?.accessToken);
        }
    }, [response]);

    return {
        request,
        promptAsync,
    };
}
