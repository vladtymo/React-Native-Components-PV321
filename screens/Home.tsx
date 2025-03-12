import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title='Go Next' onPress={() => {
                navigation.navigate("Forms")
            }} />
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