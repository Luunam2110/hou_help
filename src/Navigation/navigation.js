import * as React from 'react';
import {useState, useEffect} from "react";
import { View, Text } from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Container/Login/login';
import Index from '../Container/Index/index';
import TimelineForm from "../Container/Timeline/timeline";
import FeedBack from "../Container/FeedBack";
import AboutHouHelp from "../Container/AboutHOUHelp";
import Notification from "../Container/Notification";
import ContentNotification from "../Container/ContentNotification";
import ContentNotification2 from "../Container/ContentNotification2";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../Component/Icon/icon';
import {moderateScale, scale, verticalScale,moderateVerticalScale} from 'react-native-size-matters';
import * as STYLE from '../Component/Values/generalStyle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MyTabs from "./MyTabs";
import {SAGA} from '../Redux/constant';
import * as NetInfo from '@react-native-community/netinfo';
import * as UserAction from '../Redux/Actions/userAction';
import * as devices from '../Redux/Actions/deviceActions';
import {color} from "react-native-reanimated";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import ProgressStep from "../Container/ProgressStep/ProgressStep";

import {Previous} from "../Redux/Actions/FormControlAction";


const TabTop = createMaterialTopTabNavigator();

const Stack = createStackNavigator();
function MainNavigation(props) {


    useEffect(()=>{
        console.log(props.type_account)
    })
    const [userToken,setUserToken] = useState(1);
    // useEffect(() => {
    //     NetInfo.addEventListener(state => {
    //         props.devices.check_connected(state.isConnected);
    //     });
    //
    // }, []);
    return (
            <Stack.Navigator headerMode={'none'} initialRouteName="Login" >
                {
                    (!props.isLoadding && props.isLogged) ?
                        <>
                            <Stack.Screen name="Tab" component={MyTabs}/>
                            <Stack.Screen name="ProgressStep" component={ProgressStep}/>
                            <Stack.Screen name="Timeline" component={TimelineForm}/>
                            <Stack.Screen name="AboutHouHelp" component={AboutHouHelp}/>
                            <Stack.Screen name="FeedBack" component={FeedBack}/>
                            <Stack.Screen name="Notification" component={Notification}/>
                            <Stack.Screen name="ContentNotification" component={ContentNotification}/>
                            <Stack.Screen name="ContentNotification2" component={ContentNotification2}/>

                        </>
                    :
                        <>
                            <Stack.Screen name='login' component={Login}/>
                        </>
                }
            </Stack.Navigator>

    );
}


function mapStateToProps(state) {
    return {
        isLogged: state.userReducer.isLogged,
        isLoadding: state.userReducer.isLoadding,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(UserAction, dispatch),
        devices: bindActionCreators(devices, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
