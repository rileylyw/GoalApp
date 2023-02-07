import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
   return (
      <View style={styles.goalItem}>
         <Text style={styles.goalText}>{props.text}</Text>
      </View>
   )
}

export default GoalItem

const styles = StyleSheet.create({
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
})