import * as React from 'react';
import {
    StatusBar,
    Image,
    FlatList,
    Dimensions,
    Animated,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    Linking,
    Platform,
    TouchableWithoutFeedback,
} from 'react-native';
import {
    State,
    FlingGestureHandler,
    Directions,
} from 'react-native-gesture-handler';
import Icon from '../../Component/Icon/icon';
import  {useRef, useState,useEffect}from 'react';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './style';
import {ToastForm} from '../../Component/Values/formToast';
import Toast from '../../Component/Toast/toast';
import * as UserAction from '../../Redux/Actions/userAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ScaledSheet, verticalScale,scale,moderateVerticalScale} from 'react-native-size-matters';

function Login({navigation, color, connected_internet, userAction}) {
    const [userName, setUserName] = useState('');
    const [stateUserName, setStateUserName] = useState(false);
    const [statePassword, setStatePassword] = useState(false);
    const [password, setPassword] = useState('');
    const [showToolipUsername, setShowToolipUsername] = useState(false);
    const [contentToolipUsername, setContentToolipUsername] = useState(' Tên đăng nhập không được trống!');
    const [showToolipPass, setShowToolipPass] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const inputPassword = useRef();
    const toast = useRef();
    const heightLogo = useRef(new Animated.Value(verticalScale(200))).current;

    useEffect(() => {

        Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', keyboardShow);
        Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', keyboardHide);
        //SplashScreen.hide();
        // cleanup function
        return () => {
            Keyboard.removeListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', keyboardShow);
            Keyboard.removeListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', keyboardHide);
        };
    }, []);
    const keyboardShow = (event) => {
        Animated.timing(heightLogo, {
            duration: Platform.OS === 'ios' ? event.duration : 400,
            toValue: IMAGE_HEIGHT_SMALL,
            useNativeDriver: false,
        }).start();
    };

    const keyboardHide = (event) => {
        Animated.timing(heightLogo, {
            duration: Platform.OS === 'ios' ? event.duration : 400,
            toValue: IMAGE_HEIGHT,
            useNativeDriver: false,
        }).start();
    };
    function checkEmpty(value) {
        return value !== "";

    }
    function checkSpecialCharacters(value) {
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?₫~`•√π÷×¶∆£€¢°©™®✓]/;
        return !format.test(value);
    }

    const checkUserName = (text) => {
        if (checkEmpty(text)) {
            if (checkSpecialCharacters(text)) {
                if (!stateUserName) {
                    setShowToolipUsername(false);
                    setStateUserName(true);
                }
            } else {
                setShowToolipUsername(true);
                setStateUserName(false);
                setContentToolipUsername('  Tên đăng nhập không chứa kí tự đặc biệt!');
            }
        } else {
            setShowToolipUsername(true);
            setStateUserName(false);
            setContentToolipUsername('  Tên đăng nhập không được trống!');
        }
    };

    const checkPass = (text) => {
        if (checkEmpty(text)) {
            if (!statePassword) {
                setShowToolipPass(false);
                setStatePassword(true);
            }
        } else {
            setShowToolipPass(true);
            setStatePassword(false);
        }
    };

    const onChangeUsername = (text) => {
        setUserName(text);
        checkUserName(text);
    };

    const onChangePassword = (text) => {
        setPassword(text);
        checkPass(text);
    };
    const pressLogin = () => {
        Keyboard.dismiss();
        let standardUserName = userName.replace(/\s+/g, '');
        let standardPassword = password.replace(/\s+/g, '');

        if (connected_internet) {
            toast.current.show(ToastForm.noConnected);
        } else {
            userAction.userLoginAction(standardUserName.toLocaleLowerCase(), standardPassword);
        }
    };


    const forgetOnpress = () => {
        if (!connected_internet) {
            toast.current.show(ToastForm.noConnected);
        } else {
            Linking.openURL('https://accounts.hou.edu.vn/reset-password.php');
        }

    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{backgroundColor: '#faf9f9'}}>
                    <Animated.Image
                        style={[styles.image_logo, {height: heightLogo}]}
                        resizeMode={'contain'}
                        source={require('../../Res/Image/logo.png')}
                    />
                    <View
                        style={styles.form_login}>
                        <Text style={styles.text_1}>
                            Chào mừng
                        </Text>
                        <Text style={styles.text_2}>
                            Đăng nhập với tài khoản sinh viên
                        </Text>
                        <TouchableOpacity style={styles.btn_txt_input}>
                            <Icon name={'ios-person-circle'} type={'Ionicons'} size={25} color='#2E3E5C' style={styles.ic_style} />
                            {/*<User style={{width:'100%',padding:0,fontSize:22,marginHorizontal:10}}*/}
                            <TextInput
                                underlineColorAndroid={'transparent'}
                                returnKeyType={'next'}
                                onSubmitEditing={() => {
                                    inputPassword.current.focus();
                                }}
                                allowFontScaling={false}
                                secureTextEntry={false}
                                keyboardType={'default'}
                                onChangeText={(text) => {
                                    onChangeUsername(text);
                                }}
                                onEndEditing={() => setUserName(userName.replace(/\s+/g, ''))}
                                blurOnSubmit={false}
                                placeholder={'Mã sinh viên'}
                                value={userName}
                                maxLength={20}
                                style={styles.txt_input}
                            />
                        </TouchableOpacity>
                        {showToolipUsername ? <Text allowFontScaling={false}
                                                    style={{color: '#ff0000', paddingTop: 10}}>{contentToolipUsername}</Text> : null}
                        <TouchableOpacity style={styles.btn_txt_input}>
                            <Icon name={'lock1'} type={'AntDesign'} color='#2E3E5C' size={25} style={styles.ic_style}/>
                            {/*<IconP name="lock1" size={25} color='#2E3E5C' />*/}
                            {/*<Password style={{width:'100%',padding:0,fontSize:22}}/>*/}
                            <TextInput
                                placeholder={'Mật khẩu'}
                                maxLength={40}
                                ref={inputPassword}
                                underlineColorAndroid={'transparent'}
                                returnKeyType={'done'}
                                keyboardType={'default'}
                                secureTextEntry={hidePassword}
                                allowFontScaling={false}
                                blurOnSubmit={false}
                                onEndEditing={(text) => {
                                    setPassword(password.replace(/\s+/g, ''));

                                    if (checkEmpty(text) && !checkEmpty(userName)) {
                                        setShowToolipUsername('auto');
                                        setStateUserName(false);
                                    }
                                }}
                                onSubmitEditing={Keyboard.dismiss}
                                onChangeText={(text) => {
                                    onChangePassword(text);
                                }}
                                style={styles.txt_input}
                            />
                            <TouchableOpacity style={{right: 80}} onPressIn={() => setHidePassword(false)}
                                              onPressOut={() => setHidePassword(true)}>
                                {/*<IconP name="eyeo" size={25} color='#9FA5C0'/>*/}
                                <Icon name={'eyeo'} type={'AntDesign'} color='#9FA5C0' size={25} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        {showToolipPass ? <Text allowFontScaling={false} style={{color: '#FF0000', paddingTop: 10}}>
                            &nbsp;&nbsp;Mật khẩu không được trống
                        </Text> : null}
                        <TouchableOpacity>
                            <Text
                                style={styles.forget_password}
                                onPress={() => forgetOnpress()}
                            >
                                Quên mật khẩu ?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_login} onPress={() => pressLogin()}
                                          activeOpacity={0.7}
                        >
                            <Text
                                style={{fontSize: 25, color: "#FFF"}}>
                                Đăng nhập
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Toast color="#ff0000" ref={toast} marginBottom={50}/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
function mapStateToProps(state) {
    return {
        connected_internet: state.device.connected_internet,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(UserAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
