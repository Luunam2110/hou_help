import React, {useState} from 'react';
import {
  Button, StyleSheet, TextInput, TouchableOpacity,
  View
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


const DateForm = ({props}) => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [value,setValue] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setValue(date.toISOString().substring(0, 10));
  };

  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <View style={{margin:5}}>
      <TouchableOpacity
      onPress={showDatepicker}>
        <TextInput
            placeholder={props.text}
            underlineColorAndroid={'transparent'}
            returnKeyType={'done'}
            placeholderTextColor='#9fa5c0'
            editable={false}
            value={value}
            keyboardType={'default'}
            errorStyle={{ color: '#ff0000' }}
            style={[{width :'100%'},styles.input]}
            errorMessage='ENTER A VALID ERROR HERE'/>
      </TouchableOpacity>
      {show && (
          <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="calendar"
              onChange={onChange}
          />
      )}
    </View>
  );
};
const styles= StyleSheet.create({
  input:{
    padding:10,
    borderRadius:10,
    fontSize: 15,
    backgroundColor:'#f4f5f7'
  }
});

export default DateForm;
