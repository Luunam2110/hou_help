import React, {Component, useReducer} from 'react';
import {
    StyleSheet, Animated,
    Keyboard,
    KeyboardAvoidingView,
    Linking,
    Platform,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView, ScrollView,
} from 'react-native';
import {moderateScale, moderateVerticalScale, verticalScale} from 'react-native-size-matters';
import Svg, {Ellipse, Rect} from 'react-native-svg';
import {connect} from 'react-redux';
import Icon from '../../Component/Icon/icon';
import Header from '../../Component/Header/index';
import styles from "./style";
import {log} from "react-native-reanimated";

const DATA = [
    {
        IconName: "check",
        IconType: "Entypo",
        IconColor:"#0099ff",
        name: "Giấy tờ bạn đã hoàn tất",
        content: "Đơn xin thôi học đã hoàn tất các thủ tục. Phòng Công tác Chính trị sinh viên sẽ tiến hành trả giấy tờ vào thời gian trong lịch hẹn ghi",
        time: "15:30 14/07/2021",
        onPress:"ContentNotification",
    },
    {
        IconName: "calendar",
        IconType: "EvilIcons",
        IconColor:"#0099ff",
        name: "Bạn có một lịch hẹn",
        content: "Đơn xin thôi học đã hoàn tất các thủ tục. Phòng Công tác Chính trị sinh viên sẽ tiến hành trả giấy tờ vào thời gian trong lịch hẹn ghi",
        time: "15:30 14/07/2021",
        onPress: "ContentNotification2",
    },
    {
        IconName: "mail-read",
        IconType: "Octicons",
        IconColor:"#0099ff",
        name: "Đã nhận được giấy tờ",
        content: "Giấy xác nhận hộ nghèo của bạn đã được gửi đến phòng Công tác Chính trị sinh viên.",
        time: "10:00 14/07/2021",
        onPress: "",
    },
    {
        IconName: "clock-alert-outline",
        IconType: "MaterialCommunityIcons",
        IconColor:"#ffe500",
        name: "Giấy tờ đã quá hạn 7 ngày",
        content: "Giấy xác nhận sinh viên của bạn hiện đã quá hạn 7 ngày trong quá trình xử lý do 1 số vấn đề liên quan đến thông tin của bạn",
        time: "15:30 13/07/2021",
        onPress: "",
    },
    {
        IconName: "md-warning-outline",
        IconType: "Ionicons",
        IconColor:"#ff0000",
        name: "Đơn xin miễn hoãn nghĩa vụ quân sự bị từ chối",
        content: "Đơn xin miễn hoãn nghĩa vụ quân sự bị từ chối do bạn chưa cung cấp đủ thông tin.",
        time: "15:30 12/07/2021",
        onPress: "",
    },
]

const NoNotification = () => {
    return (
        <View style={styles.NoNotification}>
            <Image source={require('../../Res/Image/notification.png')}
                   style={styles.NoNotificationImage}
                   resizeMode={'center'}/>
            <Text style={styles.NoNotificationText}>
                Không có thông báo nào cả!
            </Text>
        </View>
    )
}

function Notification({navigation}) {
    const check=true;
    const renderDataNotification = ({item}) => {
        return (
            <TouchableOpacity onPress={()=> {item.onPress!=""?
                navigation.navigate(item.onPress) : null
            }}
                              style={styles.Notification} >
                <Icon name={item.IconName} type={item.IconType} color={item.IconColor}
                      size={45} style={styles.NotificationIcon}/>
                <View style={styles.NotificationContent}>
                    <Text   numberOfLines={1}
                            ellipsizeMode="tail"
                            style={{fontWeight:'bold'}}>{item.name}</Text>
                    <Text   numberOfLines={2}
                            ellipsizeMode="tail"
                            style={{marginVertical:verticalScale(5)}}>{item.content}</Text>
                    <Text style={{fontWeight:'bold'}}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Header navigation={navigation} type={"FIXED"} sizeText={moderateScale(30, 0.3)} title={"Thông báo"}/>
            {check ?
                <FlatList  data={DATA}
                                renderItem={(item) => renderDataNotification((item))}
                                keyExtractor={(item, index) => index.toString()}
                                style={{marginTop:verticalScale(15),
                                    height:Dimensions.get('screen').height <= 640 ? Dimensions.get('screen').height*0.75 :Dimensions.get('screen').height*0.82}}
            />
            :
           <NoNotification/>}
        </View>
    );
};
export default Notification;
