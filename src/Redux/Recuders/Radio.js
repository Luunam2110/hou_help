import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import RadioButtonRN from 'radio-buttons-react-native';

const Radio = ({props}) => {
  return (
      <View style={styles.container}>
          <Text style={{flex:8,color:'#9fa5c0'}}>{props.text}</Text>
          <View
              style={{flex:9}}>
              <RadioButtonRN
                  box={false}
                  data={props.data}
                  style={{backgroundColor:'#FFF',paddingLeft:7,paddingBottom:8,borderRadius:10}}
                  selectedBtn={(e) => console.log(e)}
                  circleSize={12}
                  icon={
                      <FontAwesome name="check-circle" size={20} color="#2c9dd1" />
                  }

              />
          </View>

      </View>

  );
};
const styles= StyleSheet.create({
    container:{
        padding:10,
        margin:5,
        borderRadius:10,
        fontSize: 15,
        backgroundColor:'#f4f5f7',
        flex:1,flexDirection:'row'
    }
});

export default Radio;
