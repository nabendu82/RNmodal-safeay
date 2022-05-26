import { StyleSheet, Text, View, DeviceEventEmitter, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

const colors = { info: 'orange', success: 'green', danger: 'red' }

const Toast = () => {
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [timeOut, setTimeOut] = useState(4000);
    const timeOutRef = useRef(null);

    useEffect(() => {
        DeviceEventEmitter.addListener('SHOW_TOAST', onNewToast);
        return () => {
            DeviceEventEmitter.removeAllListeners();
        }
    }, [])

    const closeToast = () => {
        setMessage(null);
        setTimeOut(4000);
        clearInterval(timeOutRef.current);
    }

    useEffect(() => {
        if(message){
            timeOutRef.current = setInterval(() => {
                if(timeOut === 0) closeToast();
                else setTimeOut(prev => prev - 1000);
            }, 1000)
        }

        return () => {
            clearInterval(timeOutRef.current);
        }
    }, [message, timeOut])

    const onNewToast = data => {
        setMessage(data.message);
        setMessageType(data.type);
    }

    return message && (
        <View style={[{ backgroundColor: colors[messageType]}, styles.toastContainer]}>
            <TouchableOpacity>
                <Text style={styles.textStyle}>{message}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    toastContainer: { position: 'absolute', left: '4%', right: '4%',  bottom: '4%', zIndex: 1 },
    textStyle: { color: 'white', fontSize: 18, textAlign: 'center', padding: 14, fontWeight: 'bold' }
})

export default Toast