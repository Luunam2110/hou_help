import React, {useEffect, useRef, useState} from 'react';
import {
    Dimensions,
    Animated,
    SafeAreaView, StyleSheet,
    Text, TouchableOpacity,
    View
} from "react-native";
import styles from './styles';
import TabTopForm from "../../Component/TabTopForm/TabTopForm";
import {Next, Previous} from "../../Redux/Actions/FormControlAction";
import connect from "react-redux/lib/connect/connect";
import Form from "../../Component/Form/Form";
import Proof from "../../Component/Proof/Proof";
import ConfirmInformation from "../../Component/ ConfirmInformation/ConfirmInformation";
import {sizes} from '../../Res/Size/size'


const ProgressStep = ({navigation,presentScreen,NextScreen}) => {
    const fadeAnim = useRef(new Animated.Value(presentScreen)).current;

    const  SwitchScreen= fadeAnim.interpolate({
        inputRange:[1,2,3],
        outputRange:[0,0-sizes.Width_Window,0-sizes.Width_Window*2],
        extrapolate: 'clamp'
    });
    useEffect(()=>{
        Animated.timing(fadeAnim, {
            toValue: presentScreen,
            duration: 500,
            useNativeDriver:false
        }).start();
    },[presentScreen])

    return (
        <View style={{height:'100%'}}>
            <TabTopForm/>
            <Animated.View style={{width:'300%',flex:1,flexDirection:"row",marginLeft:SwitchScreen}}>
                <Form/>
                <Proof/>
                <ConfirmInformation navigation={navigation}/>
            </Animated.View>
        </View>

    );
};

function mapStateToProps(state) {
    return {
        presentScreen: state.FormReducer.present_step
    }
}

export default connect(mapStateToProps ,null)(ProgressStep)