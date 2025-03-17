import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello Modal Screen!</Text>
        </View>
    )
}

export default ModalScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})