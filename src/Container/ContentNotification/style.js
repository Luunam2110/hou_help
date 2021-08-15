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
import {Dimensions} from 'react-native';
import {SHADOW_7,SHADOW_5,SHADOW_3} from "../../Component/Values";
export default styles = ScaledSheet.create({
    container:{
        width:Dimensions.get('screen').width*0.85,
        height:Dimensions.get('screen').height*0.5,
        backgroundColor:'#FFF',
        borderRadius:10,
        alignSelf:'center',
        alignItems:'center',
        marginVertical:'15@vs',
        ...SHADOW_7,
    },
    title:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#2685dd',
        fontSize:'17@ms0.5',
        marginTop:'5@vs',
    },
    ViewIcon:{
        alignItems: 'center',
        justifyContent:'center',
        width: '75@ms0.3',
        height: '75@ms0.3',
        borderRadius: 50,
        backgroundColor: '#9cd1ff',
        marginTop: '8@vs',
    },
    textContent:{
        marginTop:'10@vs',
        marginHorizontal:'15@s'
    },
    BTN_Timeline:{
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        width:Dimensions.get('screen').width*0.4,
        height:"30@vs",
        backgroundColor:'#2685dd',
        borderRadius:10,
        ...SHADOW_7,
    },
})
