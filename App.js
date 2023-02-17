import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View, Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
   const [goals, setGoals] = useState([])

   function addGoalHandler(goal) {
      // TODO: warning tooltip for empty or repeated strings
      // do not allow empty or repeated strings
      if (goal!=="" && !goals.some((text) => text === goal.text)) {
         console.log(goals)
         setGoals(currentGoals => [
            ...currentGoals,
            // turn data into an object
            { text: goal, id: Math.random().toString() }
         ])
      }
   }

   function deleteItemHandler(id) {
      setGoals( currentGoals => {
         return currentGoals.filter((goal) => goal.id !== id )
      })
   }

   return (
      <View style={styles.appContainer}>
         {/* button to add goals */}
         <GoalInput onAddGoal={addGoalHandler} />

         {/* list of goals */}
         <View style={styles.goalsContainer}>
            <Text style={styles.listOfGoals}>List of goals:</Text>

            <FlatList
               data={goals}
               renderItem={(item) => {
                  return <GoalItem 
                     text={item.item.text}
                     id={item.item.id}
                     onDeleteItem={deleteItemHandler}
                  />
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
