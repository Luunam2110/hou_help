import React, {Component, useReducer} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import style from './style';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import Icon from '../../Component/Icon/icon';
import Header from '../../Component/Header/index';
import {Timeline} from 'react-native-just-timeline';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";
const DATA = [
    {
        title: {
            content: 'Phòng công tác chính trị sinh viên',
            style:{
                color:'#000',
            }
        },
        description: {
            content: 'Xác nhận sinh viên',
        },
        time: {
            content: '14h30 \n 25/04',
            style:{
                color:'#000',
            }
        },
        icon:{
            content: 'check'
        },
    },
    {
        title: {
            content: 'Phòng công tác chính trị sinh viên',
            style:{
                color:'#000',
            }
        },
        description: {
            content: 'Xác nhận sinh viên',
        },
        time: {
            content: '14h30 \n 26/04',
            style:{
                color:'#000',
            }
        },
        icon:{
            content: 'check'
        },
    },
    {
        title: {
            content: 'Phòng công tác chính trị sinh viên',
            style:{
                color:'#FF0000',
            },
        },
        description: {
            content: 'Xác nhận sinh viên',
            style:{
                color:'#FF0000'
            },
        },
        time: {
            content: '14h30 \n 27/04',
            style:{
                color:'#ff0000',
            }
        },
        icon: {
            content: 'pencil',
            style:{
                backgroundColor:'#FF0000',
            }

        },
    },
    {
        title: {
            content: '...',
            style:{
                color:'#C0C0C0',
            }
        },
        description: {
            content: '...',
        },
        time: {
            content: '...',
            style:{
                color:'#000',
            }
        },
        icon: {
            content: 'user',
            style: {backgroundColor: '#C0C0C0'}
        },
    },
    {
        title: {
            content: '...',
            style:{
                color:'#C0C0C0',
            }
        },
        description: {
            content: '...',
        },
        time: {
            content:'...',
            style:{
                color:'#000',
            }
        },
        icon: {
            content: 'user',
            style: {backgroundColor: '#C0C0C0'}
        },
    },
    {
        title: {
            content: '...',
            style:{
                color:'#C0C0C0',
            }
        },
        description: {
            content: '...',
        },
        time: {
            content: '...',
            style:{
                color:'#000',
            }
        },
        icon: {
            content: 'user',
            style: {backgroundColor: '#C0C0C0'}
        },
    },
    {
        title: {
            content: '....',
            style:{
                color:'#C0C0C0',
            }
        },
        description: {
            content: '...',
        },
        time: {
            content: '...',
            style:{
                color:'#000',
            }
        },
        icon: {
            content: 'user',
            style: {backgroundColor: '#C0C0C0'}
        },
    },
];

function TimelineForm({navigation}){
    return (
        <View style={styles.timelineContainer}>
            <View style={styles.headerStyle}>
                <Header navigation={navigation} type={"FIXED"} sizeText={moderateScale(20,0.3)} title={"Đơn xin xác nhận sinh viên"}
                        iconName={'report'} iconType={'Octicons'}   iconNavigation={'FeedBack'}/>
            </View>
            <Timeline
                data={DATA}
                contentContainerStyle={styles.timeline}
                lineStyle={{ backgroundColor:'#2685DD'}}
            />
        </View>
    );
};
export default TimelineForm;
