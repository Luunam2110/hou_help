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
    text1: {
        color: '#FFF',
        fontSize: '40@ms0.3',
        marginTop: '25@mvs0.8',
        marginLeft: '30@ms',
        fontWeight: 'bold',
    },
    icon_bell: {
        color: "#FFF",
        zIndex: 1
    },
    notify: {
        width: '18@ms0.3',
        height: '18@ms0.3',
        backgroundColor: '#ff0000',
        alignItems: 'center',
        borderRadius: 50,
        zIndex: 2,
        top: '10@mvs0.5',
        right: '-15@ms0.5'
    },
    studentsInformation:{
        flexDirection:'row',
        marginTop:'25@mvs0.5',
        backgroundColor:'#FFF',
        width: Dimensions.get('screen').width*0.85,
        height: '100@mvs0.5',
        alignSelf:'center',
        borderRadius: 25,
        overflow:'hidden',
        ...SHADOW_7,
    },
    avaStudents:{
        height:'80@mvs0.5',
        width:'80@mvs0.5',
        marginVertical:'10@mvs0.5',
        borderRadius:15,
        marginHorizontal:'10@mvs0.5'
    },
    students:{
        marginHorizontal: '5@ms0.5',
        marginVertical:'10@mvs0.5',
    },
    profileStudents:{
        flexDirection: 'row',
    },
    studentsText:{
        fontSize: '15@ms0.5',
        marginLeft: '5@s',
        color:'#535353',
        width:Dimensions.get('screen').width*0.85- moderateScale(145,0.5),
    },
    viewSelection:{
        flex:1,
        backgroundColor:'#FFF',
        height: '255@ms',
        width: Dimensions.get('screen').width*0.85,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop:'20@vs',
        borderRadius:25,
        ...SHADOW_7,
    },

    Selection:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: Dimensions.get('screen').width*0.7,
        marginVertical:10,
    },
    selectionIcon:{
        color:'#2685DD',
        paddingRight:20
    },
    selectionText:{
        fontSize:'15@ms0.3',
        alignSelf:'center',
        color:'#555f7e',
    },
    viewSelection2:{
        backgroundColor:'#FFF',
        height: Dimensions.get('screen').height*0.15,
        width: Dimensions.get('screen').width*0.85,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical:'10@vs',
        borderRadius:25,
        ...SHADOW_7,
    },
})
