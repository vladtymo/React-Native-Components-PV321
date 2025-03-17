import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { migrateDbIfNeeded } from '../store/migrations';

export default function RootLayout() {
    return (
        <SQLiteProvider databaseName="todo_items.db" onInit={migrateDbIfNeeded}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </SQLiteProvider>
    );
}
