import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Notifications from 'expo-notifications';
import { SchedulableTriggerInputTypes } from 'expo-notifications';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

Notifications.setNotificationCategoryAsync("yesno", [
    {
        buttonTitle: "Yes",
        identifier: "yes"
    },
    {
        buttonTitle: "No",
        identifier: "no",
        options: {
            isDestructive: true
        }
    }
]);

Notifications.addNotificationResponseReceivedListener((res) => {
    const data = res.notification.request.content.data;

    if (data)
        Alert.alert("Data: " + data.duration + " : " + data.user);

    if (res.actionIdentifier) {
        switch (res.actionIdentifier) {
            case "yes":
                Alert.alert("Yes");
                break;
            case "no":
                Alert.alert("No");
                break;
        }
    }
});

const service = {
    async notifyNow() {
        return await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body'
            },
            trigger: null // imediately
        });
    },
    async notifyAfter(sec: number) {
        return await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                data: {
                    duration: sec,
                    user: "Vlad Tymo"
                }
            },
            trigger: {
                type: SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: sec
            }
        });
    },
    async notifyAboutBreak() {
        return await Notifications.scheduleNotificationAsync({
            content: {
                title: "You have a cofee break!",
                body: 'Here is the notification body'
            },
            trigger: {
                type: SchedulableTriggerInputTypes.DATE,
                date: new Date(2025, 2, 24, 19, 20)
            }
        });
    },
    async cancel(id: string) {
        return await Notifications.cancelScheduledNotificationAsync(id);
    },
    async notifyWithActions() {
        return await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                categoryIdentifier: "yesno"
            },
            trigger: null // imediately
        });
    },
}

export default function NotifyExample({ navigation, route }: Props) {
    let lastNotificationId = "";

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notification Example</Text>
            <Button title='Nofity Now' onPress={() => service.notifyNow()} />
            <Button title='Nofity after 5s' onPress={async () => lastNotificationId = await service.notifyAfter(5)} />
            <Button title='Nofity About Break' onPress={() => service.notifyAboutBreak()} />
            <Button title='Cancel' onPress={() => service.cancel(lastNotificationId)} />
            <Button title='With Custom Actions' onPress={() => service.notifyWithActions()} />
        </View>
    )
}

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