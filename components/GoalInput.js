import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

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
      <Modal
         visible={props.isVisible}
         animationType='slide'
      >
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.textInput}
               placeholder='Your goals!'
               onChangeText={goalInputHandler}
               value={goal}
            />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button title='Add Goal' onPress={addGoalHandler} />
               </View>
               <View style={styles.button}>
                  <Button title='Cancel' />
               </View>
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
      marginBottom: 24,
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '100%',
      marginRight: 8,
      padding: 8
   },
   buttonContainer: {
      marginTop: 13,
      flexDirection: 'row'
   },
   button: {
      width: '30%',
      marginHorizontal: 8
   }
})