import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title='Go Next' onPress={() => {
                navigation.navigate("Forms")
            }} />
            <Link href="/modal" asChild>
                <Pressable>
                    {({ pressed }) => (
                        <Text>Open Modal</Text>
                    )}
                </Pressable>
            </Link>
        </View>
    )
}

export default Home

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