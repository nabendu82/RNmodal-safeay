import { StyleSheet, Text, View, DeviceEventEmitter } from 'react-native'
import React, { useEffect } from 'react'

const Toast = () => {
    useEffect(() => {
        DeviceEventEmitter.addListener('SHOW_TOAST', onNewToast);
        return () => {
            DeviceEventEmitter.removeAllListeners();
        }
    }, [])

    const onNewToast = data => {
        console.log('onNewToast', data);
    }

    return (
        <View>
            <Text>Toast</Text>
        </View>
    )
}

export default Toast

const styles = StyleSheet.create({})