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
    SafeAreaView, ScrollView,
} from 'react-native';
import Svg, {Ellipse, Path} from 'react-native-svg';
import Icon from '../../Component/Icon/icon';
import {
    ScaledSheet,
    verticalScale,
    scale,
    mediumScale,
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';
import styles from './style';
import {bindActionCreators} from "redux";
import * as StudentProfileAction from "../../Redux/Actions/StudentsProfileAction";
import {connect} from "react-redux";
import ModalImage from "../../Component/ModalImage/ModalImage";

const {width} = Dimensions.get('screen');
const SvgPath = () => {
    return (
        <Svg style={{height: 2}}>
            <Path
                d="M 25 2 L 260 2"
                stroke="#006400"
            />
        </Svg>
    );
};

function Utilities(props) {
    const cx_s = scale(230);
    const cy_s = scale(0);
    const rx_s = scale(300);
    const ry_s = scale(150);
    const modalImage = useRef();
    return (
        <View style={{
            flex: 1,
            // backgroundColor: '#faf9f9',
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
                    <Text style={styles.text1}>Tác vụ</Text>
                    <TouchableOpacity   style={{
                                            marginTop: moderateVerticalScale(18, 0.8),
                                            position: 'absolute',
                                            right: moderateScale(40, 0.5)}}
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
                <ScrollView style={{height: Dimensions.get('screen').height <= 640 ? moderateVerticalScale(350, 0.5)
                        : moderateVerticalScale(480, 0.5)}}>
                    <View style={styles.viewSelection}>
                        <View style={{marginTop:15}}>
                            <TouchableOpacity style={styles.Selection}>
                                <View style={{flexDirection:'row',}}>
                                    <Icon name={'earth'} type={'AntDesign'} size={25} style={styles.selectionIcon}/>
                                    <Text style={styles.selectionText}>Ngôn ngữ</Text>
                                </View>
                                <Icon name={'right'} type={'AntDesign'} size={22} style={{color:'#2685DD'}}/>
                            </TouchableOpacity>
                            <SvgPath/>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.Selection}
                                              onPress={() => props.navigation.navigate('FeedBack')}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={'report'} type={'Octicons'} size={25} style={styles.selectionIcon}/>
                                    <Text  style={styles.selectionText}>Phản hồi</Text>
                                </View>
                                <Icon name={'right'} type={'AntDesign'} size={22} style={{color:'#2685DD'}}/>
                            </TouchableOpacity>
                            <SvgPath/>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.Selection}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={'save'} type={'AntDesign'} size={25} style={styles.selectionIcon}/>
                                    <Text  style={styles.selectionText} style={styles.selectionText}>Lưu tài khoản</Text>
                                </View>
                                <Icon name={'right'} type={'AntDesign'} size={22} style={{color:'#2685DD'}}/>
                            </TouchableOpacity>
                            <SvgPath style={{backgroundColor:'#006400'}}/>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.Selection}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={'bells'} type={'AntDesign'} size={25} style={styles.selectionIcon}/>
                                    <Text  style={styles.selectionText}>Thông báo</Text>
                                </View>
                                <Icon name={'right'} type={'AntDesign'} size={22} style={{color:'#2685DD'}}/>
                            </TouchableOpacity>
                            <SvgPath/>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.Selection}
                                              onPress={() => props.navigation.navigate('AboutHouHelp')}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name={'info'} type={'Octicons'} size={25} style={styles.selectionIcon}/>
                                    <Text  style={[styles.selectionText,{marginLeft:4}]}>Về HOU Help</Text>
                                </View>
                                <Icon name={'right'} type={'AntDesign'} size={22} style={{color:'#2685DD'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewSelection2}>
                        <View style={{marginTop:15}}>
                            <TouchableOpacity style={styles.Selection}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={'lock'} type={'SimpleLineIcons'} size={25} style={styles.selectionIcon}/>
                                    <Text  style={styles.selectionText}>Đổi mật khẩu</Text>
                                </View>
                                <Icon name={'right'} type={'AntDesign'} size={22} style={{color:'#2685DD'}}/>
                            </TouchableOpacity>
                            <SvgPath/>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.Selection}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name={'log-out'} type={'Entypo'} size={24} style={styles.selectionIcon}/>
                                    <Text  style={[styles.selectionText]}>Đăng xuất</Text>
                                </View>
                                <Icon name={'right'} type={'AntDesign'} size={22} style={{color:'#2685DD'}}/>
                            </TouchableOpacity>
                        </View>
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
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Utilities);
