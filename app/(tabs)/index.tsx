import React, { useEffect, useState } from 'react'
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Link } from 'expo-router';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useSQLiteContext } from 'expo-sqlite';

import { Task, tasksTable } from '../../store/schema';
import * as schema from '../../store/schema';
import { useDispatch } from 'react-redux';
import { minus, plus, setTitle } from '../slices/menuSlice';

const Home = () => {
    // const { success, error } = useMigrations(db, migrations);
    const db = drizzle(useSQLiteContext(), { schema });
    const dispatch = useDispatch();

    const [items, setItems] = useState<Task[] | null>(null);
    const [text, setText] = useState('');

    useEffect(() => {
        refreshItems();
    }, []);

    const addItemHandle = async () => {
        await db.insert(tasksTable).values({ text: text });
        await refreshItems();

        dispatch(setTitle(text));
        dispatch(plus());
    }
    const refreshItems = async () => {
        const users = await db.select().from(tasksTable);
        setItems(users);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <TextInput
                placeholder="Enter item:"
                style={styles.input}
                value={text}
                onChangeText={setText} />

            <View>
                <Button title='-' onPress={() => dispatch(minus())} />
                <Button title='+' onPress={() => dispatch(plus())} />
            </View>

            <Button title='Add Item' onPress={addItemHandle} />

            <FlatList
                data={items}
                renderItem={({ item }) => <Text>{item.text}</Text>}
                keyExtractor={(x, _) => x.id.toString()}
            />

            <Link href="/modal" asChild>
                <Pressable>
                    {() => (
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