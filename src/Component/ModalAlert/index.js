import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {SHADOW_3} from '../Values/generalStyle';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';


const ModalAlert = forwardRef((props, ref) => {

    const [visible, setVisible] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            show() {
                setVisible(true);
            },
            hide() {
                setVisible(false);
            },
        }),
    );

    return (
        <Modal
            isVisible={visible}
            // deviceHeight={sizes.Height_Window}
            animationIn={'fadeInUp'}
            animationInTiming={400}
            animationOutTiming={400}
            animationOut={'bounceOut'}
            useNativeDriver={true}
            backdropTransitionInTiming={400}
            backdropTransitionOutTiming={400}
            hideModalContentWhileAnimating={true}
            statusBarTranslucent
            // onSwipeComplete={() => this.setState({ visible: false })}
            // swipeDirection={"down"}
            // onBackdropPress={() => {
            //     this.setState({ visible: false });
            // }}

            style={{justifyContent: 'center', alignItems: 'center', margin: 0}}>

            <View style={{
                borderRadius: moderateScale(15, 1),
                backgroundColor: '#e1e7ed',
                width: scale(270),
                paddingVertical: verticalScale(30),
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>

                {/*{props.typeImage === 'IMAGE' ?*/}
                {/*    <Image source={props.image} style={props.styleImage}*/}
                {/*           resizeMode={'stretch'}/>*/}
                {/*    :*/}
                {/*    props.typeImage === 'LOTTIE' ?*/}
                {/*        <LottieView*/}
                {/*            source={props.image}*/}
                {/*            style={props.styleImage}*/}
                {/*            loop*/}
                {/*            speed={props.speed}*/}
                {/*            autoPlay*/}
                {/*            colorFilters={props.configImage}/>*/}
                {/*        :*/}
                {/*        null*/}
                {/*}*/}

                <Text allowFontScaling={false} style={{
                    width: '80%',
                    textAlign: 'center',
                    color: '#004c92',
                    fontSize: moderateScale(15, 0.3),
                    marginVertical: verticalScale(20)
                }}>
                    {props.content}
                </Text>

                <TouchableOpacity
                    activeOpacity={0.8} style={{
                    width: moderateScale(100),
                    height: moderateScale(50),
                    backgroundColor: '#004c92',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: moderateScale(15),
                    ...SHADOW_3
                }}
                    onPress={() => {
                        setVisible(false);
                        setTimeout(() => {
                            props.action();
                        }, 400);
                    }}>
                    <Text allowFontScaling={false}
                          style={{
                              fontSize: moderateScale(22, 0.3),
                              fontWeight: 'bold',
                              color: "#fff",
                          }}>{props.buttonContent}</Text>
                </TouchableOpacity>
            </View>

        </Modal>
    );
});

export default ModalAlert;
