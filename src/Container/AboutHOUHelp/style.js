import {
    ScaledSheet,
    verticalScale,
    scale,
    mediumScale,
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';
import { s, vs, ms, mvs} from 'react-native-size-matters';
import * as STYLE from '../../Res/GeneralStyle/generalStyle';
import {Task_Colors} from '../../Res/Color/color';
import {Dimensions} from 'react-native';
import {SHADOW_7,SHADOW_5,SHADOW_3} from "../../Component/Values";
export default styles = ScaledSheet.create({
    image_logo:{
        alignSelf:'center',
        height:'175@mvs0.5',
    },
    Viewversion:{
        width:100,
        height: 25,
        borderRadius:100,
        borderWidth: 2,
        borderColor:'#2685DD',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center',
    },
    versionText:{
        fontSize:'12@ms',
        color:'#2685DD',
    },
    viewContainStroke:{
        width: '75%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: "0@vs",
        flexDirection:'row',
    },
    viewStroke:{
        width: '45%',
        height: "1@ms",
        backgroundColor: '#6b6b6b',
    },
    text_feedback:{
        color:'#FFF',
        fontSize:'18@ms0.3'
    },
    button_feedback:{
        alignSelf: 'center',
        width:Dimensions.get('screen').width*0.75,
        backgroundColor: '#163eff',
        height:'40@vs',
        borderRadius:'30@ms1',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        marginVertical: 20,
        ...SHADOW_3,
    },
})
