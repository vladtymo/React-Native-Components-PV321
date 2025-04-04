import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import UserItem from '../../components/UserItem';
import { useUserData } from '../hooks/useUserData';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function About({ navigation, route }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Button title='Go Home' onPress={() => {
                navigation.popToTop()
            }} />
            <UserItem id={1} />
            <UserItem id={9} />
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
