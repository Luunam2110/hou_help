import React, {Component, useReducer} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import style from './style';
import {moderateScale} from 'react-native-size-matters';
import Svg, { Ellipse,Rect } from 'react-native-svg';
import {connect} from 'react-redux';
import Icon from '../../Component/Icon/icon';
import Header from '../../Component/Header/index';
import styles from "./style";
function AboutHouHelp({navigation}){
    return(
        <View>
            <Header navigation={navigation} type={"FIXED"} sizeText={moderateScale(30,0.3)} title={"Về HOU Help"}/>
            <Image style={styles.image_logo}
                   source={require('../../Res/Image/houhelp.png')}
                   resizeMode={'center'}/>
            <View style={styles.Viewversion}>
                <Text allowFontScaling={false} style={styles.versionText}>Phiên bản 1.0.0</Text>
            </View>
            <View >
                <Text  allowFontScaling={false} style={{color: '#2685DD',textAlign:'center',
                    marginHorizontal:15,marginVertical:10,fontSize:16}}>
                    Với mục tiêu mang tới những đổi mới trong công tác
                    <Text  allowFontScaling={false} style={{fontWeight:'bold'}}> giải quyết giấy tờ thủ tục</Text> cho sinh viên một cách
                    <Text allowFontScaling={false} style={{fontWeight:'bold'}}> thuận tiện, nhanh chóng. </Text>
                    Ứng dụng <Text style={{fontWeight:'bold'}}>HOU Help </Text>là nơi các bạn
                    <Text style={{fontWeight:'bold'}}> sinh viên</Text> có thể gửi yêu cầu, nhận lịch hẹn và theo dõi lịch
                    trình xử lý giấy tờ nhằm góp phần nâng cao chất lượng hỗ trợ và
                    phục vụ sinh viên tại{"\n"}
                    <Text allowFontScaling={false} style={{fontWeight:'bold'}}>Trường Đại học Mở Hà Nội.</Text>
                </Text>
            </View>
            <View style={styles.viewContainStroke}>
                <View style={styles.viewStroke}/>
                <Icon type={'FontAwesome5'} solid name={'university'} size={moderateScale(20)}
                      color={'#5a5a5a'} />
                <View style={styles.viewStroke}/>
            </View>
            <View style={{alignItems:'center'}}>
                <Text allowFontScaling={false} style={{color: '#2685DD',textAlign:'center',
                    marginHorizontal:15,fontSize:15}}>Xây dựng và phát triển bởi</Text>
                <Text allowFontScaling={false} style={{color: '#2685DD',textAlign:'center',
                    marginHorizontal:15,fontSize:15}}>Khoa Công Nghệ Thông Tin và </Text>
                <Text allowFontScaling={false} style={{color: '#2685DD',textAlign:'center',
                    marginHorizontal:15,fontSize:15}}>Khoa Tài Chính Ngân Hàng</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button_feedback}
                              onPress={() => navigation.navigate('FeedBack')}>
                <Text allowFontScaling={false} style={[styles.text_feedback]}>Gửi phản hồi về chúng tôi</Text>
            </TouchableOpacity>
        </View>
    );
};
export default AboutHouHelp;
