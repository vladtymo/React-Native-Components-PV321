import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import UserItem from '../../components/UserItem';
import { useUserData } from '../hooks/useUserData';
import { User } from '../models/user';
import ErrorBoundary from 'react-native-error-boundary';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

const ids: number[] = [
    4, 5, 6, 7
]

export default function About({ navigation, route }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Button title='Go Home' onPress={() => {
                navigation.popToTop()
            }} />

            {ids.map((id) => (
                <ErrorBoundary
                    key={id}
                    FallbackComponent={() => <Text>Error</Text>}>
                    <UserItem key={id} id={id} />
                </ErrorBoundary>
            ))}
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
})
