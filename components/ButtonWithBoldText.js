import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonWithBoldText = ({ title, onPress, style, fontSize }) => {
   return (
      <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
         <Text style={[styles.buttonText, {fontSize: fontSize}]}>{title}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   buttonContainer: {
      width: '30%',
      backgroundColor: '#233d4d',
      marginHorizontal: 4,
      padding: 8,
      borderRadius: 6,
      alignItems: 'center'
   },
   buttonText: {
      color: '#fe7f2d',
      fontWeight: 'bold',
      fontSize: 15
   },
});

export default ButtonWithBoldText;
