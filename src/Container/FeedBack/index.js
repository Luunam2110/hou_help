import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View, TextInput} from 'react-native';
import style from './style';
import {moderateScale} from 'react-native-size-matters';
import RadioButtonRN from 'radio-buttons-react-native';
import Svg, { Ellipse,Rect } from 'react-native-svg';
import {connect} from 'react-redux';
import Icon from '../../Component/Icon/icon';
import Header from '../../Component/Header/index';
import Toast from '../../Component/Toast/toast';
import ModalAlert from '../../Component/ModalAlert';
import styles from "./style";
import {bindActionCreators} from "redux";
const data = [
    {
        label: 'Phản ánh giấy tờ đang xử lý',
        accessibilityLabel: 'Your label'
    },
    {
        label: 'Báo lỗi ứng dụng',
        accessibilityLabel: 'Your label'
    },
    {
        label: 'Đóng góp ý kiến',
        accessibilityLabel: 'Your label'
    }
];
function FeedBack(props){
    const [content, setContent] = useState('');
    const [selectradio, setSelectradio] = useState('');
    const modal = useRef();
    const viewInput = useRef();
    const scroll = React.useRef(null);
    const toast = useRef();
    // useEffect(()=>{
    //     return () => toast.current.clear();
    // },[])
    const showToastUnconnectted = () => {
        toast.current.show(ToastForm.noConnected);
    };
    const onPress = () => {
        let text_toast = '';
        if (selectradio === '') {
            text_toast = 'Bạn chưa chọn mục cần phản hồi';
            }   else
                if(content==='')
                {
                    text_toast='Bạn chưa nhập nội dung cần phản hồi';
                }   else {
                    props.navigation.navigate('Home');
                    }
        if (text_toast !== '') {
            toast.current.show({
                text: text_toast,
                textColor: 'rgb(255,4,4)',
                icon: 'exclamation-circle',
                iconType: 'font-awesome',
                iconColor:'rgb(255,0,0)',
                duration: 3500,
            });
        }
    }
    return(
        <View>
            <Header navigation={props.navigation} type={"FIXED"} sizeText={moderateScale(30,0.3)} title={"Phản hồi"}/>
            <View style={styles.container}>
                <Text style={styles.textContainer}>
                    Bạn muốn phản hồi về...
                </Text>
                <RadioButtonRN
                    data={data}
                    selectedBtn={(text) => setSelectradio(text.label)}
                    circleSize={15}
                    box={false}
                    animationTypes={['zoomIn']}
                    duration={350}
                    activeColor={'#2685DD'}
                    style={styles.radioBtn}
                    textStyle={styles.radioText}
                    />
                <Text style={styles.textContainer}>
                    Nội dung...
                </Text>
                <TouchableOpacity style={styles.btn_txt_input}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        returnKeyType={'done'}
                        allowFontScaling={false}
                        secureTextEntry={false}
                        keyboardType={'default'}
                        placeholder={'Nội dung bạn muốn phản hồi...'}
                        style={styles.txt_input}
                        onChangeText={(text) => setContent(text)}
                    />
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.btn_submit}
                              onPress={() => onPress()}
            >
                <Text style={styles.txt_submit}>Gửi phản hồi</Text>
            </TouchableOpacity>
            <Toast color="red" ref={toast} marginBottom={50}/>
        </View>
    );
};
function mapStateToProps(state) {
    return {
        connected_internet: state.device.connected_internet,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedBack);
