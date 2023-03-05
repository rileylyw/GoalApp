import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View, Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
import ButtonWithBoldText from './components/ButtonWithBoldText';

export default function App() {
   const [modalIsVisible, setModalIsVisible] = useState(false)
   const [goals, setGoals] = useState([])

   function setAddGoalHandler() {
      setModalIsVisible(true)
   }

   function endAddGoalHandler() {
      setModalIsVisible(false)
   }

   function addGoalHandler(goal) {
      // TODO: warning tooltip for empty or repeated strings
      // do not allow empty or repeated strings
      if (goal !== "" && !goals.some((text) => text === goal.text)) {
         console.log(goals)
         setGoals(currentGoals => [
            ...currentGoals,
            // turn data into an object
            { text: goal, id: Math.random().toString() }
         ])
      }
      endAddGoalHandler()
   }

   function deleteItemHandler(id) {
      setGoals(currentGoals => {
         return currentGoals.filter((goal) => goal.id !== id)
      })
   }

   return (
      <>
         <StatusBar style='light' />
         <View style={styles.appContainer}>
            <View style={styles.startAddingGoalsButtonView}>
               <ButtonWithBoldText
                  title={goals.length > 0 ? 'Add More Goals!' : 'Start Adding Goals!'}
                  onPress={setAddGoalHandler}
                  fontSize={'18'}
                  style={{ width: '80%' }}
               />
               <Text>Tap goal to delete</Text>
            </View>
            <GoalInput
               isVisible={modalIsVisible}
               onAddGoal={addGoalHandler}
               onCancel={endAddGoalHandler}
            />

            <View style={styles.goalsContainer}>
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
      </>
   );
}

const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
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
   startAddingGoalsButtonView: {
      alignItems: 'center',
      paddingTop: 60,
      paddingBottom: 15,
   },
});


// TODO move finished item to the bottom && grey