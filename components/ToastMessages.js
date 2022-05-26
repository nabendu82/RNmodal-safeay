import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'
import toast from '../helpers/toast'

const ToastMessages = () => {
    return (
        <>
            <Text style={styles.titleText}>Toast Messages</Text>
            <Button title="success" onPress={() => toast.success({ message: 'Sucessful' })} />
            <Button title="error" onPress={() => toast.danger({ message: 'Error'})} />  
            <Button title="info" onPress={() => toast.info({ message: 'Info'})} />
        </>
    )
}

export default ToastMessages

const styles = StyleSheet.create({
    titleText: { fontSize: 22, fontWeight: 'bold', textAlign: 'center',
    paddingVertical: 20, color: 'darkblue' }
})