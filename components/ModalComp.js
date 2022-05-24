import { StyleSheet, Text, Pressable, Modal, Image } from 'react-native'
import React, { useState } from 'react'

const ModalComp = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <Image source={require('../assets/unsplash.jpg')} style={styles.image} />
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, porro.</Text>
                <Text style={styles.closeText} onPress={() => setModalVisible(!modalVisible)}>Close</Text>
            </Modal>
            <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>About React Native</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#009688'
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    image: {
        marginTop: 150,
        marginBottom: 10,
        width: '100%',
        height: 350
    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        padding: 40
    },
    closeText: {
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center'
    }
})

export default ModalComp