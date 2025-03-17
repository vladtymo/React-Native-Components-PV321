import * as SQLite from 'expo-sqlite';
import { Item } from './models';

const db = SQLite.openDatabaseSync('todo_items.db');

async function addItem(value: string): Promise<Item> {
    const result = await db.runAsync(`INSERT INTO items (value) VALUES (?)`, value);
    return { id: result.lastInsertRowId, value: value };
}

// INSERT INTO items (value) VALUES (${value})`
// INSERT INTO items (value) VALUES ('Vlad')`

// Heh' drop table items -- blalba
// INSERT INTO items (value) VALUES ('Heh') drop table items -- blalba)`

async function removeItem(id: number) {
    await db.runAsync(`DELETE FROM items WHERE id = ?`, id);
}

async function updateItem(id: number, value: string) {
    await db.runAsync(`UPDATE items SET value = ? WHERE id = ?`, value, id);
}

async function getItems(): Promise<Item[]> {
    return await db.getAllAsync<Item>('SELECT * FROM items');
}

export { getItems, addItem, removeItem, updateItem }