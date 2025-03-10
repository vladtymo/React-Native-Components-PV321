import { Platform, StatusBar as StatusBarNative, Image, SafeAreaView, StyleSheet, Text, View, Button, TextInput, InputAccessoryView, Alert, Pressable, Modal, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import TitleComponent from './components/TitleComponent';
import TestModal from './components/TestModal';
import UserForm from './components/UserForm';

// const questions = [
// ]

export default function App() {
  // methods, props, state, hooks, etc.

  // [name, setterName] = useState(initialValue)
  const [darkMode, setDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [formlVisible, setFormVisible] = useState(false);
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

        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={(text) => setLen(text.length)} />

        <Text>Text Length: {len}</Text>

        <TitleComponent />
        <Button title="Open Modal" onPress={() => setModalVisible(true)} />
        <Button title="Open Form" onPress={() => setFormVisible(true)} />

        <TestModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        <UserForm visible={formlVisible} onClose={() => setFormVisible(false)} />
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
  },
});
