import React, {forwardRef, useImperativeHandle, useState, memo} from 'react';
import Modal from 'react-native-modal';
import {sizes} from '../Values/sizes';
import ImageViewer from 'react-native-image-zoom-viewer';
import {TouchableOpacity} from 'react-native';
import Icon from '../Icon/icon';
import {moderateScale} from 'react-native-size-matters';


const ModalImage = forwardRef(({url}, ref) => {
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
            animationIn={'fadeInUp'}
            animationInTiming={400}
            animationOutTiming={400}
            animationOut={'fadeOutDown'}
            backdropTransitionInTiming={400}
            backdropTransitionOutTiming={400}
            hideModalContentWhileAnimating={true}
            backdropColor={'black'}
            backdropOpacity={1}
            useNativeDriver={true}
            onSwipeComplete={() => setVisible(false)}
            swipeDirection={'down'}
            statusBarTranslucent
            style={{marginVertical: 0, marginHorizontal: 0}}>
            <ImageViewer
                imageUrls={url}
                enableSwipeDown={true}
                saveToLocalByLongPress={false}
                onSwipeDown={() => setVisible(false)}
                failImageSource={{url: 'https://lh3.googleusercontent.com/proxy/2CTsU6u4rTSAZfM1jcR_54jNBKEL4XR7BCsSgHSAJMa8SfktUrcyRt3RdZ2jreYznuqNB9gopBnNBrmRmg4ITFZS-IBaVXV2SeVD'}}
            />
            <TouchableOpacity style={{
                width: moderateScale(40),
                height: moderateScale(40),
                backgroundColor: "rgba(226,227,229,0.7)",
                borderRadius: moderateScale(25),
                justifyContent: 'center',
                alignItems: 'center',
                top:sizes.Height_StatusBar+moderateScale(35),
                left:moderateScale(25),
                position: 'absolute',
            }} onPress={() => {
                setVisible(false);
            }}>
                <Icon name="close" size={moderateScale(25, 0.3)}
                      color='#000000'/>
            </TouchableOpacity>
        </Modal>
    );
});

export default memo(ModalImage);
