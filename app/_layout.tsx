import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { Stack } from 'expo-router';
import { openDatabaseSync, SQLiteProvider } from 'expo-sqlite';
import migrations from '../drizzle/migrations';
import { Suspense } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const DATABASE_NAME = 'tasks_db';

export default function RootLayout() {
    const expoDb = openDatabaseSync(DATABASE_NAME);
    const db = drizzle(expoDb);
    const { success, error } = useMigrations(db, migrations);

    if (error) {
        return (
            <SafeAreaView>
                <Text>Migration error: {error.message}</Text>
            </SafeAreaView>
        );
    }
    if (!success) {
        return (
            <SafeAreaView>
                <Text>Migration is in progress...</Text>
            </SafeAreaView>
        );
    }

    return (
        <Suspense fallback={<ActivityIndicator size="large" />}>
            <SQLiteProvider
                databaseName={DATABASE_NAME}
                options={{ enableChangeListener: true }}
                useSuspense>
                <Provider store={store}>
                    <GestureHandlerRootView>
                        <Stack>
                            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                    </GestureHandlerRootView>
                </Provider>
            </SQLiteProvider>
        </Suspense>
    );
}
