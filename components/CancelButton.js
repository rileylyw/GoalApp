import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CancelButton = ({ onPress, style }) => {
   return (
      <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
         <Text style={[styles.buttonText]}>Cancel</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   buttonContainer: {
      width: '30%',
      marginHorizontal: 4,
      padding: 8,
      borderRadius: 6,
      alignItems: 'center'
   },
   buttonText: {
      color: '#780000',
      fontWeight: 'bold',
      fontSize: 15
   },
});

export default CancelButton;
