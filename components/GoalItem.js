import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
   return (
      // props.id -> first item received by onDeleteItem func@App.js
      <View style={styles.goalItem}>
         <Pressable
            android_ripple={{ color: '#210644' }}
            onPress={props.onDeleteItem.bind(this, props.id)}
            // for iOS only
            style={(pressedItem) => pressedItem.pressed && styles.pressedItem}
         >
            <Text style={styles.goalText}>{props.text}</Text>
         </Pressable>
      </View>
   )
}

export default GoalItem

const styles = StyleSheet.create({
   goalItem: {
      margin: 8,
      borderRadius: 6,
      borderColor: '#5e0acc',
      backgroundColor: '#5e0acc',
   },
   pressedItem: {
      borderRadius: 6,
      opacity: 0.5,
      backgroundColor: '#210644'
   },
   goalText: {
      color: '#ffffff',
      paddingHorizontal: 15,
      fontSize: 16,
      fontWeight: 'bold',
      padding: 8,
   }
})


// TODO ripple effect when pressed