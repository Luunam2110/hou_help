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

function ContentNotification({navigation}) {
    return (
        <View>
            <Header navigation={navigation} type={"FIXED"} sizeText={moderateScale(30, 0.3)} title={"Chi tiết"}/>
            <View style={styles.container}>
                <Text allowFontScaling={false} style={styles.title}>Giấy tờ của bạn đã{"\n"}hoàn tất</Text>
                <View style={styles.ViewIcon}>
                    <Icon name={'check'} type={'Entypo'} color='#2685DD' size={60}/>
                </View>
                <View style={styles.textContent}>
                    <Text style={{fontSize:moderateScale(15,0.3)}} >
                    Đơn xin nghỉ việc đã hoàn tất các thủ tục.{"\n"}
                    Phòng Công tác Chính trị sinh viên sẽ tiến hành trả giấy tờ vào:</Text>
                    <Text style={{fontSize:moderateScale(15,0.3),marginLeft: 15}}>* Thời gian: 23h00 - 23/05/2021{"\n"}
                        * Địa điểm: Phòng Công tác chính trị sinh viên, tầng 1, B101 Phố Nguyễn Hiền, Bách Khoa, Hai Bà
                        Trưng, Hà Nội{"\n"}
                        * Người tiếp nhận: Nguyễn Thanh Nam
                    </Text>
                    <Text style={{fontSize:moderateScale(15,0.3)}}>
                        Đề nghị sinh viên khi đến mang theo giấy tờ chứng thực đã được nộp trong quá trình làm giấy tờ!
                    </Text>
                </View>
                <Text style={{alignSelf:'flex-end', marginRight:scale(15),fontWeight:'bold'}}>15:30-14/07/2021</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Timeline')} style={styles.BTN_Timeline}>
                <Text style={{color:'#FFF', fontWeight:'bold',fontSize:moderateScale(15,0.5)}}>
                    Xem tiến trình
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default ContentNotification;
