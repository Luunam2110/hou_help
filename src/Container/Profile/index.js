import React, {useRef} from 'react';
import {
    Animated,
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
    SafeAreaView,
    ScrollView
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import Icon from '../../Component/Icon/icon';
import FastImage from 'react-native-fast-image';
import ModalImage from '../../Component/ModalImage/ModalImage';
import {moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";
import styles from "./style";
import {sizes} from '../../Component/Values';
import {bindActionCreators} from 'redux';
import * as StudentProfileAction from '../../Redux/Actions/StudentsProfileAction';
import * as studentsAction from "../../Redux/Actions/studentsAction";
import {connect} from 'react-redux';

// Giao diện khi không có đơn đang xử lý
const NoFormalities = () => {
    return (
        <View>
            <Image source={require('../../Res/Image/box1.png')}
                   style={{
                       height: Dimensions.get('screen').height * 0.22,
                       width: Dimensions.get('screen').height * 0.22,
                       alignSelf: 'center',
                       marginTop: moderateVerticalScale(20, 0.3)
                   }}/>
            <View style={{alignItems: 'center', marginTop: moderateVerticalScale(10, 0.5)}}>
                <Text style={{fontSize: moderateScale(15, 0.3), color: '#C0C0C0', fontWeight: 'bold'}}>Không có giấy
                    tờ </Text>
                <Text style={{fontSize: moderateScale(15, 0.3), color: '#C0C0C0', fontWeight: 'bold'}}>đang xử lý</Text>
            </View>
        </View>
    )
}
//Giao diện khi không có lịch hẹn
const NoCalendar = () => {
    return (
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image source={require('../../Res/Image/CalendarX.png')}
                   style={{
                       height: Dimensions.get('screen').height * 0.1,
                       width: Dimensions.get('screen').height * 0.1,
                       marginTop: moderateVerticalScale(10, 0.3)
                   }}/>
            <View style={{marginLeft: 0, justifyContent: 'center'}}>
                <Text style={{fontSize: moderateScale(14, 0.3), color: '#C0C0C0',fontWeight: 'bold'}}>Không có lịch hẹn</Text>
                <Text style={{fontSize: moderateScale(14, 0.3), color: '#C0C0C0',fontWeight: 'bold'}}>Lấy giấy tờ</Text>
            </View>
        </View>
    )
}
//Biến check để ẩn hiện đang xử lý và lịch hẹn
const check = false;

function Profile(props) {
    //Data flastlist bao gồm đơn đang xử lý và lịch hẹn, tự động gen ra màn hình
    const DATAForm = [
        {

            image: require('../../Res/Image/form1.png'),
            name: "Đơn xin xác nhận sinh viên",
            local: "Phòng tổ chức hành chính",
        },
        {

            image: require('../../Res/Image/form2.png'),
            name: "Đơn xin thôi học",
            local: props.studentReducer.unit,
        },
    ]
    const DATACalendar = [
        {

            image: require('../../Res/Image/form1.png'),
            name: "Đơn xin xác nhận sinh viên",
            local: "Phòng tổ chức hành chính",
            time: '09h00 01/07/2021',
        },
        {

            image: require('../../Res/Image/form2.png'),
            name: "Đơn xin thôi học",
            local: props.studentReducer.unit,
            time: '09h00 02/07/2021',
        },
    ]
    const ITEM_WIDTH = moderateScale(150,0.5);
    const cx_s = scale(150);
    const cy_s = scale(0);
    const rx_s = scale(300);
    const ry_s = scale(150);
    const modalImage = useRef();
    const renderItemFrom = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.ProcessingFlatlist}
                onPress={() => props.navigation.navigate('Timeline')}
                activeOpacity={1}>
                <View style={styles.ProcessingFlatlist_view_image}>
                    <Image source={item.image}
                           style={styles.ProcessingFlatlist_image}/>
                </View>
                <View style={styles.ProcessingFlatlist_view}>
                    <Text style={styles.ProcessingFlatlist_name}
                          numberOfLines={1}
                          ellipsizeMode="tail">{item.name}</Text>
                    <Text style={styles.ProcessingFlatlist_local}
                          numberOfLines={1}
                          ellipsizeMode="tail">{'⦿ ' + item.local}</Text>
                </View>
            </TouchableOpacity>
        )
    };
    const renderItemCalendar = ({item}) => {
        return (
            <View style={styles.CalendarFlatlist}>
                <View style={styles.CalendarFlatlist_view}>
                    <View style={styles.CalendarFlatlist_view_image}>
                        <Image source={item.image}
                               style={styles.CalendarFlatlist_image}/>
                    </View>
                    <View style={{marginVertical: verticalScale(10)}}>
                        <View style={styles.CalendarInfor}>
                            <Icon name={'file-1'} type={'Fontisto'} size={25} style={styles.CalendarIcon}/>
                            <Text style={[styles.CalendarText, {marginHorizontal: scale(4)}]}
                                  numberOfLines={1}
                                  ellipsizeMode="tail">{item.name}</Text>
                        </View>
                        <View style={styles.CalendarInfor}>
                            <Icon name={'city-variant-outline'} type={'MaterialCommunityIcons'} size={25}
                                  style={[styles.CalendarIcon, {marginVertical: verticalScale(5)}]}/>
                            <Text style={[styles.CalendarText, {marginVertical: verticalScale(10)}]}
                                  numberOfLines={1}
                                  ellipsizeMode="tail">{item.local}</Text>
                        </View>
                        <View style={styles.CalendarInfor}>
                            <Icon name={'calendar'} type={'Feather'} size={25} style={styles.CalendarIcon}/>
                            <Text
                                style={[styles.CalendarText, {marginVertical: verticalScale(7)}]}>{item.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    };

    return (
        <View style={{
            flex: 1,
            // backgroundColor: '#ba1010',
            overflow: 'hidden',
            marginBottom: moderateVerticalScale(50, 0.5)
        }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'}/>
            <Svg style={{position: 'absolute'}}>
                <Ellipse
                    cx={`${cx_s}`}
                    cy={`${cy_s}`}
                    rx={`${rx_s}`}
                    ry={`${ry_s}`}
                    fill="#2685DD"
                />
            </Svg>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>Cá nhân</Text>
                    <TouchableOpacity   style={{
                                            marginTop: moderateVerticalScale(18, 0.8),
                                            position: 'absolute',
                                            right: moderateScale(40, 0.5),}}
                                        onPress={()=>props.navigation.navigate('Notification')}>
                        <View style={styles.notify}><Text style={{color: '#FFF'}}>5</Text></View>
                        <Icon name={'bell-o'} type={'FontAwesome'} size={30} style={styles.icon_bell}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.studentsInformation}>
                    <TouchableOpacity
                        onPress={() => modalImage.current.show()}>
                        <Image
                            style={styles.avaStudents}
                            source={props.studentProfileReducer.gender === 'Nam' ? require('../../Res/Image/user.png')
                                : require('../../Res/Image/user_female.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.students}>
                        <View style={styles.profileStudents}>
                            <Icon name={'user'} type={'AntDesign'} size={25}/>
                            <Text style={[styles.studentsText, {fontWeight: 'bold', color: 'black'}]}
                                  numberOfLines={1}
                                  ellipsizeMode="tail">{props.studentProfileReducer.name}</Text>
                        </View>
                        <View style={styles.profileStudents}>
                            <Icon name={'address-card'} type={'FontAwesome5'} size={22}
                                  style={{marginVertical: moderateVerticalScale(5, 0.5)}}/>
                            <Text style={[styles.studentsText, {marginVertical: moderateVerticalScale(5, 0.5)}]}>
                                {props.studentProfileReducer.code}</Text>
                        </View>
                        <View style={styles.profileStudents}>
                            <Icon name={'mail-outline'} type={'MaterialIcons'} size={25}/>
                            <Text style={[styles.studentsText]}
                                  numberOfLines={1}
                                  ellipsizeMode="tail">{props.studentProfileReducer.email}</Text>
                        </View>
                    </View>
                </View>
                <ScrollView
                    style={{height: Dimensions.get('screen').height <= 640 ? moderateVerticalScale(350, 0.5)
                            : moderateVerticalScale(480, 0.5)}}>
                    <View style={styles.ProcessingForm}>
                        <Text style={styles.ProcessingTitle}>Đang xử lý</Text>
                        {check ?
                            <FlatList
                                data={DATAForm}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                decelerationRate='fast'
                                pagingEnabled
                                snapToInterval={ITEM_WIDTH}
                                renderItem={(item) => renderItemFrom(item)}
                                keyExtractor={(item, index) => index.toString()}
                            /> :
                            <NoFormalities/>}
                    </View>
                    <View style={styles.CalendarForm}>
                        <Text style={styles.CalendarTitle}>Lịch hẹn</Text>
                        {check ?
                            <FlatList
                                data={DATACalendar}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                decelerationRate='fast'
                                pagingEnabled
                                renderItem={(item) => renderItemCalendar(item)}
                                keyExtractor={(item, index) => index.toString()}
                            /> :
                            <NoCalendar/>}
                    </View>
                </ScrollView>
            </View>
            <ModalImage
                url={[{
                    url: '',
                    props: {
                        source: props.studentProfileReducer.gender === 'Nam' ? require('../../Res/Image/user.png')
                            : require('../../Res/Image/user_female.png'),
                    },
                }]} ref={modalImage}/>
        </View>
    );
}

function mapStateToProps(state) {
    return {
        studentProfileReducer: state.studentProfileReducer,
        studentReducer: state.studentReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        studentProfileAction: bindActionCreators(StudentProfileAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
