import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";

import {styles} from './style';

const WrapForm = (ButtonText,HeaderText, onPress) => {
  return (
    <SafeAreaView style={{paddingTop: 25 ,flex:1,flexDirection:'column'}}>
        <View style={[styles.ContainerHeader]}><Text style={styles.Header}>Tải minh chứng</Text></View>
        <View style={[styles.ContainerContent]}>
            <View style={styles.Content}></View>
            <TouchableOpacity
            onPress={()=>{console.log('ok gg');}}
            style={styles.Button}
            >
                <Text style={styles.TextBottom}>Tải lên</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};


export default WrapForm;
