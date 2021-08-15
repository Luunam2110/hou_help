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
import {moderateScale, moderateVerticalScale, verticalScale, scale} from 'react-native-size-matters';
import Svg, {Ellipse, Rect} from 'react-native-svg';
import {connect} from 'react-redux';
import Icon from '../../Component/Icon/icon';
import Header from '../../Component/Header/index';
import styles from "./style";

function ContentNotification2({navigation}) {
    return (
        <View>
            <Header navigation={navigation} type={"FIXED"} sizeText={moderateScale(30, 0.3)} title={"Chi tiết"}/>
            <View style={styles.container}>
                <Text allowFontScaling={false} style={styles.title}>Bạn có một lịch hẹn</Text>
                <View style={styles.ViewIcon}>
                    <Icon name={'check'} type={'Entypo'} color='#2685DD' size={60}/>
                </View>
                <View style={styles.textContent}>
                    <Text>
                        Phòng Công tác Chính trị sinh viên đã nhận được Giấy hoãn nghĩa vụ
                        quân sự bằng đường chuyển phát nhanh theo yêu cầu nộp trong quy định nhà trường của: Sinh viên: Trần Bá Phúc
                        Mã sinh viên: 17A10010203 Ngành:
                        Công nghệ thông tin Nhà trường thông báo để sinh viên nắm rõ thông tin!
                    </Text>
                </View>
                <Text style={{alignSelf:'flex-end', marginRight:scale(15),fontWeight:'bold'}}>15:30-14/07/2021</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.goBack(null)} style={styles.BTN_Timeline}>
                <Text style={{color:'#FFF', fontWeight:'bold',fontSize:moderateScale(15,0.5)}}>
                    Trở về
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default ContentNotification2;
