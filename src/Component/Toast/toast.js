'use strict';
import {Animated, Text, TouchableOpacity} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {sizes} from '../Values/index';
import style from './style';
import {moderateScale, scale} from 'react-native-size-matters';
import Icon from '../Icon/icon';

const Toast = forwardRef((props, ref) => {

        const styles = style(props.color);
        const animatedValue = useRef(new Animated.Value(0)).current;
        const [toastShown, setToastShown] = useState(false);
        const hideToast = useRef(null);

        const [textColor, setTextColor] = useState('black');
        const [text, setText] = useState('Thông báo');
        const [icon, setIcon] = useState(null);
        const [iconColor, setIconColor] = useState('white');
        const [iconType, setIconType] = useState('FontAwesome');
        const [textButton, setTextButton] = useState('Nút');
        const [textColorButton, setTextColorButton] = useState('white');
        const [typeButton, setTypeButton] = useState(null);
        const [backgroundButton, setBackgroundButton] = useState('white');
        const [iconButton, setIconButton] = useState(null);
        const [iconColorButton, setIconColorButton] = useState('white');
        const [iconTypeButton, setIconTypeButton] = useState('FontAwesome');
        const [background, setBackground] = useState('white');
        const [timeShow, setTimeShow] = useState(350);
        const [delay, setDelay] = useState(0);
        const [duration, setDuration] = useState(3000);
        const [heightToast, setHeightToast] = useState(0);
        const [data, setData] = useState(null);
        const [functionParent, setFunctionParent] = useState(() => {
        });

        useImperativeHandle(
            ref,
            () => ({
                show({
                         textColor = 'black',
                         text = 'Thông báo',
                         icon = null,
                         iconColor = 'white',
                         iconType = 'FontAwesome',
                         textButton = 'Nút',
                         textColorButton = 'white',
                         typeButton = null,
                         backgroundButton = 'white',
                         iconButton = null,
                         iconColorButton = 'white',
                         iconTypeButton = 'FontAwesome',
                         background = 'white',
                         timeShow = 350,
                         delay = 0,
                         duration = 3000,
                         functionParent = null,
                         data = null,
                     }) {

                    // Kiểm tra xem có đang hiện toast hay không, nếu được ấn tiếp sẽ làm mới thời gian hiện
                    //     bằng cách huỷ sự hiện ẩn đi và gọi lại từ sự kiện hiện bên dưới
                    if (toastShown && hideToast) {
                        clearTimeout(hideToast);
                    }

                    setToastShown(true);
                    setTextColor(textColor);
                    setText(text);
                    setIcon(icon);
                    setIconColor(iconColor);
                    setIconType(iconType);
                    setTextButton(textButton);
                    setTextColorButton(textColorButton);
                    setTypeButton(typeButton);
                    setBackgroundButton(backgroundButton);
                    setIconButton(iconButton);
                    setIconColorButton(iconColorButton);
                    setIconTypeButton(iconTypeButton);
                    setBackground(background);
                    setTimeShow(timeShow);
                    setDelay(delay);
                    setDuration(duration);
                    setFunctionParent(functionParent);
                    setData(data);

                    setTimeout(() => {
                        console.log("ani chay")
                        Animated.timing(
                            animatedValue,
                            {
                                toValue: 1,
                                duration: timeShow,
                                useNativeDriver: true,
                            }).start(hide(duration, timeShow)); /*Gọi hàm ẩn toast*/
                    }, delay);

                },
                clear(){
                    if (toastShown && hideToast) {
                        clearTimeout(hideToast);
                    }
                }
            }),
        );

        const hideNow = () => {

            if (toastShown && hideToast) {
                clearTimeout(hideToast);
            }

            Animated.timing(
                animatedValue,
                {
                    toValue: 0,
                    duration: timeShow,
                    useNativeDriver: true,
                }).start();
        };

        const hide = (duration, timeShow) => {
            hideToast.current = setTimeout(() => {
                console.log('ani dung');
                setToastShown(false);
                Animated.timing(
                    animatedValue,
                    {
                        toValue: 0,
                        duration: timeShow,
                        useNativeDriver: true,
                    }).start();
            }, duration);
        };

        // Render ra button tuỳ chọn theo tham số truyền vào
        const renderButton = () => {
            if (typeButton !== null) {
                switch (typeButton) {
                    case 'button':
                        return (
                            <TouchableOpacity activeOpacity={0.8}
                                              style={[styles.tou_button, {backgroundColor: backgroundButton}]}
                                              onPress={() => {
                                                  hideNow();

                                                  if (functionParent !== null) {
                                                      return functionParent(data);
                                                  }
                                              }}>
                                <Icon size={moderateScale(15)} type={iconTypeButton}
                                      name={iconButton}
                                      color={iconColorButton}
                                      containerStyle={{marginRight: scale(10)}}/>
                                <Text allowFontScaling={false}
                                      style={{color: textColorButton}}>{textButton}</Text>
                            </TouchableOpacity>
                        );
                    default:
                        return null;
                }
            }
        };

        const num = props.marginBottom + heightToast + (props.marginBottom / 10);

        const animationY = animatedValue.interpolate({
            inputRange: [0, 0.6, 1],
            outputRange: [sizes.Height_Window+sizes.Height_StatusBar, sizes.Height_Window+sizes.Height_StatusBar - (num / 2), sizes.Height_Window+sizes.Height_StatusBar -num],
        });

        const animationOpa = animatedValue.interpolate({
            inputRange: [0, 0.6, 1],
            outputRange: [0, 0, 1],
        });

        return (
            <Animated.View
                onLayout={e => heightToast !== e.nativeEvent.layout.height ? setHeightToast(e.nativeEvent.layout.height) : null}
                style={[styles.container, {
                    transform: [{translateY: animationY}],
                    backgroundColor: background,
                    opacity: animationOpa,
                }]}>


                <Text allowFontScaling={false} style={[styles.text_toast, {color: textColor}]}>
                    {icon !== null ?
                        <Icon type={iconType} style={{marginRight: scale(10)}} name={icon}
                              color={iconColor} size={moderateScale(20)}/> : null}
                    &nbsp;&nbsp;{text}
                </Text>
                {renderButton()}
            </Animated.View>
        );
    },
);
export default React.memo(Toast);