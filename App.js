import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

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
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item.item.text}</Text>
              </View>
            )
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#5e0acc',
  },
  goalText: {
    color: '#5e0acc',
    paddingHorizontal: 15,
    fontWeight: 'bold'
  }
});
