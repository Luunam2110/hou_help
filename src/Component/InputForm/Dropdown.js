import React, {useState} from 'react';
import {
    Picker, StyleSheet, Text,
    View
} from "react-native";



const DropDown = ({props}) => {
    const [selectedValue, setSelectedValue] = useState(props.data[0]);
  return (
      <View style={styles.input}>
          <Text style={{flex:1,color:'#9fa5c0'}}>{props.text}</Text>
          <View
              style={{flex:1,backgroundColor:'#FFF',borderRadius:10}}>
              <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  itemTextStyle={{fontSize: 15}}
                  activeItemTextStyle={{fontSize: 15, fontWeight: 'bold'}}
              >
                  {
                      props.data.map((item,index)=><Picker.Item key={index} label={item} value={item}/> )
                  }
              </Picker>
          </View>

      </View>

  );
};

const styles= StyleSheet.create({
    input:{
        flex:1,flexDirection:'row',
        padding:10,
        margin:5,
        borderRadius:10,
        fontSize: 15,
        backgroundColor:'#f4f5f7'
    }
});

export default DropDown;
