import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import ButtonWithBoldText from './ButtonWithBoldText';
import CancelButton from './CancelButton';

function GoalInput(props) {
   const [goal, setGoal] = useState('')

   function goalInputHandler(text) {
      setGoal(text)
   }

   function addGoalHandler() {
      props.onAddGoal(goal)
      setGoal('')
   }

   return (
      <Modal visible={props.isVisible} animationType='slide'>
         <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput
               style={styles.textInput}
               placeholder='Your goals!'
               onChangeText={goalInputHandler}
               value={goal}
            />
            <View style={styles.buttonContainer} >
               <CancelButton onPress={props.onCancel} />
               <ButtonWithBoldText onPress={addGoalHandler} title='Add Goal' />
            </View>
         </View>
      </Modal>
   )
}

export default GoalInput

const styles = StyleSheet.create({
   inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#2a9d8f'
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#faedcd',
      color: '#264653',
      borderRadius: 6,
      width: '90%',
      marginRight: 8,
      padding: 16
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
   },
   cancelButton: {
      borderRadius: 6
   },
   image: {
      width: 100,
      height: 100,
      margin: 20
   }
})