import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { addItem, getItems } from '../../store/dbUtils';
import { Item } from '../../store/models';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [text, setText] = useState('');

    useEffect(() => {
        refreshItems();
    }, []);

    const addItemHandle = async () => {
        setItems([...items, await addItem(text)]);
        await refreshItems();
    }
    const refreshItems = async () => {
        setItems(await getItems());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <TextInput
                placeholder="Enter item:"
                style={styles.input}
                value={text}
                onChangeText={setText} />

            <Button title='Add Item' onPress={addItemHandle} />

            <FlatList
                data={items}
                renderItem={({ item }) => <Text>{item.value}</Text>} />

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
        padding: 14
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
        minWidth: 300
    },
})