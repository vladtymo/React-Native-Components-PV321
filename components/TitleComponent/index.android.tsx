import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class TitleComponent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>This is Android component!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    }
})