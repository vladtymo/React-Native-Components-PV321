import * as Notifications from 'expo-notifications';
import { SchedulableTriggerInputTypes } from 'expo-notifications';

export const service = {
    async notifyNow() {
        return await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body'
            },
            trigger: null // imediately
            // trigger: {
            //     type: SchedulableTriggerInputTypes.TIME_INTERVAL,
            //     seconds: 4000
            // },
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