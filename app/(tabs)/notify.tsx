import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Notifications from 'expo-notifications';
import { SchedulableTriggerInputTypes } from 'expo-notifications';
import { service } from '../../services/notifications';

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

export default function NotifyExample() {
    let lastNotificationId = "";

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notification Example</Text>
            <Button title='Nofity Now' onPress={() => service.notifyNow()} testID='notifyNowBtn' />
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