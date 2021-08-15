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
    NoNotification:{
        width:'100%',
        height:Dimensions.get('screen').height*0.86,
    },
    NoNotificationImage:{
        height:Dimensions.get('screen').height*0.35,
        alignSelf:'center',
        marginTop:'50@mvs0.3',
    },
    NoNotificationText:{
        alignSelf: "center",
        fontWeight:'bold',
        fontSize:'20@ms0.5',
        color:'#9f9f9f',
    },
    Notification:{
        flexDirection:'row',
        width: Dimensions.get('screen').width*0.85,
        height:Dimensions.get('screen').height*0.13,
        backgroundColor:'#FFF',
        borderRadius:15,
        alignSelf:'center',
        marginVertical:'10@vs',
        ...SHADOW_5,
    },
    NotificationIcon:{
        alignSelf:'center',
        marginHorizontal:'10@ms0.5'
    },
    NotificationContent:{
        width: Dimensions.get('screen').width*0.68,
        justifyContent:'center',
    }
})
