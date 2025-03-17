import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function About({ navigation, route }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Text>Hello</Text>
            <Button title='Go Home' onPress={() => {
                navigation.popToTop()
            }} />
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