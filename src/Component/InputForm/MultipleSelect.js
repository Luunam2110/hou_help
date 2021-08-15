import React, {useState} from 'react';
import {
    View,
    Text, StyleSheet
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

import SectionedMultiSelect from "react-native-sectioned-multi-select";

const MultipleSelect = ({props}) => {
    const [SelectedItem,setSelectedItem]=useState([]);
    const onSelectedItemsChange =(selects)=>{
        setSelectedItem(selects);
    }
  return (
      <View style={styles.container}>
          <View style={{marginTop:-5}}>
              <SectionedMultiSelect
                  items={props.data}
                  IconRenderer={MaterialIcons}
                  itemFontFamily={{fontWeight: "normal"}}
                  displayKey="value"
                  uniqueKey="id"
                  selectText={props.text}
                  showDropDowns={true}
                  readOnlyHeadings={false}
                  selectedItems={SelectedItem}
                  onSelectedItemsChange={onSelectedItemsChange}
                  showChips={false}
              />
          </View>

      </View>


  );
};
const styles= StyleSheet.create({
    container:{
        height:50,
        margin:5,
        borderRadius:10,
        maxHeight:50,
        fontSize: 14,
        backgroundColor:'#f4f5f7',
        flex:1
    }
});

export default MultipleSelect;
