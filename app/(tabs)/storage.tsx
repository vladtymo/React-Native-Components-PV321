import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import UserItem from '../../components/UserItem';
import { useUserData } from '../hooks/useUserData';
import { User } from '../models/user';
import ErrorBoundary from 'react-native-error-boundary';
import { TextInput } from 'react-native-gesture-handler';
import { storage } from '../../services/storage';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function Storage({ navigation }: Props) {
    const [email, setEmail] = useState<string>();

    useEffect(() => {
        loadEmail();
    }, []);

    const loadEmail = async () => {
        setEmail(await storage.load<string>("email") ?? "");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Async Storage Example</Text>
            <Button title='Go Home' onPress={() => { navigation.popToTop() }} />

            <TextInput style={styles.input} placeholder='Enter email:'
                value={email} onChangeText={setEmail} />

            <Button title='Save' onPress={() => {
                storage.save("email", email)
            }} />
            <Text>Hello dear, {email || "anonymous"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 6,
        margin: 6,
        borderRadius: 5,
    },
})
