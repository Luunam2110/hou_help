import {ScaledSheet, verticalScale,scale,moderateVerticalScale} from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import * as STYLE from '../../Res/GeneralStyle/generalStyle';
import {Task_Colors} from '../../Res/Color/color';
export const IMAGE_HEIGHT = verticalScale(200);
export const IMAGE_HEIGHT_SMALL = verticalScale(80);
export default styles = ScaledSheet.create({
    image_logo: {
        marginTop:Platform.OS === 'ios' ? '25@s' : '35@s',
        alignSelf:'center',
        marginBottom:'30@mvs0.3'
    },
    form_login: {
        width: "100%",
        alignItems: 'center',
    },
    text_1: {
        color: "#2E3E5C",
        fontSize: '25@ms0.3',
        fontWeight: 'bold',
    },
    text_2: {
        fontSize: 17,
        color: '#9FA5C0',
        paddingBottom: '10@s',
    },
    btn_txt_input: {
        marginTop: '10@s',
        paddingHorizontal: '15@vs',
        alignItems: 'center',
        paddingVertical: '12@vs',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: "#ddd4d4",
        flexDirection: 'row',
        width: '90%',
        ...STYLE.SHADOW_2,
    },
    txt_input: {
        width: '100%',
        paddingVertical: '0@vs',
        paddingHorizontal: 0,
        fontSize: '22@ms0.3',
        marginHorizontal: '10@s',
    },
    ic_style: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    forget_password: {
        marginTop: '20@vs',
        fontSize: '20@ms0.3',
        color: '#2E3E5C',
        marginRight: '125@s',
        left: '150@s',
    },
    btn_login: {
        marginTop: '25@vs',
        paddingHorizontal: '20@s',
        paddingVertical: '12@vs',
        borderRadius: 10,
        backgroundColor: "#2685DD",
        alignItems: 'center',
        width: '90%',
        ...STYLE.SHADOW_7,
    }
}
);


