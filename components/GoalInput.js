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
            <Button
               title='Add Goal'
               onPress={addGoalHandler} />
         </View>
      </Modal>
   )
}

export default GoalInput

const styles = StyleSheet.create({
   inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8
   },
})