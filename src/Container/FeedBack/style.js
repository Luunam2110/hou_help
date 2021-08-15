import {
    ScaledSheet,
    verticalScale,
    scale,
    mediumScale,
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import { s, vs, ms, mvs} from 'react-native-size-matters';
import * as STYLE from '../../Res/GeneralStyle/generalStyle';
import {Task_Colors} from '../../Res/Color/color';
import {SHADOW_7,SHADOW_5} from "../../Component/Values";
export default styles = ScaledSheet.create({
    container:{
        backgroundColor:'#FFF',
        width:Dimensions.get('screen').width*0.85,
        height:Dimensions.get('screen').height*0.6,
        alignSelf:'center',
        borderRadius:25,
        marginVertical:'25@mvs0.2',
        marginHorizontal:'25@ms0.2',
        ...SHADOW_5,
    },
    textContainer:{
        fontSize:'16@ms0.3',
        fontWeight:'bold',
        marginHorizontal: '15@s',
        marginTop:'15@s',
        color:'#2685DD',
    },
    radioBtn:{
        marginVertical: '5@vs',
    },
    radioText:{
        marginVertical:'3@vs',
        fontSize: '14@ms0.2'
    },
    btn_txt_input: {
        width:'85%',
        height: '45%',
        marginTop: '10@s',
        paddingHorizontal: '15@vs',
        alignSelf: 'center',
        paddingVertical: '12@vs',
        borderRadius: 15,
        borderWidth:1,
        borderColor:'#2685DD',
    },
    txt_input: {
        width: '100%',
        paddingVertical: '0@vs',
        paddingHorizontal: 0,
        fontSize: '15@ms0.3',
        marginHorizontal: '10@s',
    },
    btn_submit:{
        backgroundColor: '#2685DD',
        width:'140@s',
        height:'40@s',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginVertical:'15@vs',
        ...SHADOW_5,
    },
    txt_submit:{
        color: '#FFF',
        fontSize:'16@ms0.3',
        fontWeight: 'bold',
    },
})
