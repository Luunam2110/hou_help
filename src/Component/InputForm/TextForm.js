import React from 'react';
import {
  View,
  StyleSheet, TextInput, KeyboardAvoidingView
} from "react-native";
import {sizes} from '../../Res/Size/size'



const TextForm = ({props}) => {
  const size= props.size;
  const Width_Window= sizes.Width_Window;
  return (
    <KeyboardAvoidingView style={{margin:5}}>
      <TextInput
          placeholder={props.text}
          placeholderTextColor='#9fa5c0'
          underlineColorAndroid={'transparent'}
          returnKeyType={'done'}
          keyboardType={'default'}
          errorStyle={{ color: 'red' }}
          style={[{width :'100%'},styles.input]}
          errorMessage='ENTER A VALID ERROR HERE'/>
    </KeyboardAvoidingView>
  );
};
const styles= StyleSheet.create({
  input:{
    padding:10,
    borderRadius:10,
    fontSize: 15,
    lineHeight:30,
    backgroundColor:'#f4f5f7'
  }
});

export default TextForm;
