//login screen
import React from 'react';
import { View, Button } from 'react-native';
import { useGoogleAuth } from '../auth/GoogleAuth';

export default function LoginScreen() {
    const { promptAsync, request } = useGoogleAuth();
    console.log("request:", request);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
                title="Sign in with Google"
                disabled={!request}
                onPress={() => promptAsync()}
            />
        </View>
    );
}
