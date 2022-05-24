import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
// import ModalComp from './components/ModalComp'
import ToastMessages from './components/ToastMessages'
import Toast from './components/Toast'

const App = () => {
  return (
    // <View style={styles.container}>
    //   <ModalComp />
    // </View>
    <>
      <Toast />    
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ToastMessages />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   padding: 25,
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightgray'
  }
})

export default App
