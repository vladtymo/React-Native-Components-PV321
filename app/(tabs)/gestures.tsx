import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated, { interpolateColor, runOnJS, runOnUI, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export default function Gestures() {
    const isPressed = useSharedValue(false);
    const offset = useSharedValue({ x: 0, y: 0 });

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { translateY: offset.value.y },
                { scale: withSpring(isPressed.value ? 1.2 : 1) },
            ],
            backgroundColor: isPressed.value ? 'violet' : 'lightblue',
        };
    });

    // const start = useSharedValue({ x: 0, y: 0 });
    const gesture = Gesture.Pan()
        .onBegin(() => {
            isPressed.value = true;
        })
        .onUpdate((e) => {
            offset.value = {
                x: e.translationX,
                y: e.translationY,
            };
        })
        .onEnd(() => {
            // start.value = {
            //     x: offset.value.x,
            //     y: offset.value.y,
            // };
        })
        .onFinalize(() => {
            isPressed.value = false;

            if (offset.value.y > 200)
                offset.value.y = withTiming(400, undefined, () => {
                    // runOnJS(() => {
                    //     offset.value = withSpring({ x: 0, y: 0 });
                    // });
                    offset.value = { x: 0, y: 0 };
                });
            else
                offset.value = withSpring({ x: 0, y: 0 });
        });

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.container}>
                <Text style={styles.text}>Gesture Handler</Text>
                <Animated.View style={[styles.ball, animatedStyles]} />
            </View>
        </GestureDetector>
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
    ball: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'blue',
        alignSelf: 'center',
    },
})