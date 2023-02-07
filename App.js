import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View, Text } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
   const [goal, setGoal] = useState('')
   const [goals, setGoals] = useState([])

   function goalInputHandler(text) {
      setGoal(text)
   }

   function addGoldHandler() {
      setGoals(currentGoals => [
         ...currentGoals,
         // turn data into an object
         { text: goal, key: Math.random().toString() }
      ])
   }



   return (
      <View style={styles.appContainer}>
         {/* button to add goals */}
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.textInput}
               placeholder='Your goals!'
               onChangeText={goalInputHandler} />
            <Button
               title='Add Goal'
               onPress={addGoldHandler} />
         </View>

         {/* list of goals */}
         <View style={styles.goalsContainer}>
            <Text style={styles.listOfGoals}>List of goals:</Text>

            <FlatList
               data={goals}
               renderItem={(item) => {
                  return <GoalItem text={item.item.text} />
               }}
               alwaysBounceVertical={false}
            />

         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
   },
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
   goalsContainer: {
      flex: 5,
      marginHorizontal: 15
   },
   listOfGoals: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 15
   },

});
