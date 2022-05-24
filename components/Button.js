import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={{ margin: 12, padding: 12, backgroundColor: 'darkmagenta', borderRadius: 4 }} onPress={onPress}>
            <Text style={{ textAlign: 'center', color: 'white'}}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})