import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated';

export default function Animations() {
    const width = useSharedValue(100);
    const radius = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        borderRadius: `${radius.value}%`,
        width: 100 + radius.value,
        height: 100 + radius.value,
        transform: [
            { rotate: `${radius.value * 3.6}deg` }
        ],
    }));

    const handleStart = () => {
        const to = Math.random() * 200 + 50;
        // width.value = to;
        // width.value = withTiming(to, { duration: 2000, });

        // width.value = withRepeat(withTiming(300), 4, true);

        // radius.value = withTiming(50, {}, () => {
        //     radius.value = withTiming(0);
        // });

        // width.value = withDelay(3000, withTiming(350, {}, () => {
        //     width.value = withDelay(1000, withTiming(100))
        // }));

        width.value = withSpring(280, {
            mass: 2.6,
            damping: 12,
            stiffness: 331,
        }, () => {
            width.value = withDelay(1000, withTiming(100));
        });
    };

    const handleRotate = () => {
        radius.value = withRepeat(withSpring(50, { duration: 2000 },), 4, true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Animations</Text>
            <Button title='Start' onPress={handleStart} />
            <Animated.View
                style={{
                    width: width,
                    height: 100,
                    backgroundColor: 'violet',
                }}
            />
            <Pressable onPress={handleRotate}>
                <Animated.View
                    style={[{
                        width: 100,
                        height: 100,
                        marginTop: 20,
                        backgroundColor: 'lightgreen',
                    }, animatedStyles]}
                />
            </Pressable>
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