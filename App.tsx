import { Platform, StatusBar as StatusBarNative, Image, SafeAreaView, StyleSheet, Text, View, Button, TextInput, InputAccessoryView, Alert, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  // methods, props, state, hooks, etc.

  // [name, setterName] = useState(initialValue)
  const [darkMode, setDarkMode] = useState(false);
  const [len, setLen] = useState(0);

  const showTitle = () => {
    Alert.alert('Title', 'Do you want to change photo?', [
      { text: 'No', style: 'destructive' },
      { text: 'Maybe', onPress: () => console.log('Maybe pressed!'), style: 'cancel' },
      { text: 'Yes', onPress: () => { setDarkMode(!darkMode); } },
    ]);
  }

  return (
    <View style={{
      ...styles.container,
      backgroundColor: darkMode ? 'lightgray' : 'white',
    }}>
      <SafeAreaView style={styles.safe}>
        <Text>Open up App.tsx to start working on your app!</Text>

        <Pressable onPress={showTitle}>
          <Image
            source={require(`./assets/icon.png`)}
            style={styles.image} />
        </Pressable>

        <Button title="Click me" onPress={showTitle} />

        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={(text) => setLen(text.length)} />

        <Text>Text Length: {len}</Text>

        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  safe: {
    marginTop: Platform.OS === 'android' ? StatusBarNative.currentHeight : 0,
  },
  image: {
    width: 'auto',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 6,
    margin: 6,
    borderRadius: 5,
  }
});
