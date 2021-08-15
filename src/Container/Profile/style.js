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
import {SHADOW_7,SHADOW_5,SHADOW_2} from "../../Component/Values";
export default styles = ScaledSheet.create({
    text1: {
        color: '#FFF',
        fontSize: '40@ms0.3',
        marginTop: '25@mvs0.8',
        marginLeft: '30@ms',
        fontWeight:'bold',
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
        ...SHADOW_5,
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
    //Style đơn đang xử lý
    ProcessingForm:{
        height:'310@mvs0.3',
    },
    ProcessingTitle:{
        fontWeight:'bold',
        fontSize:'30@ms0.3',
        marginTop:'5@vs',
        marginLeft:'15@vs',

    },
    ProcessingFlatlist:{
        flex: 1,
        marginRight: "20@ms0.5",
        marginLeft:"20@ms0.5",
        height:"400@mvs0.5",
        marginTop:'0@mvs0.3'
    },
    ProcessingFlatlist_image: {
        width:"150@ms0.5",
        height:"170@mvs0.5",
        borderRadius:20,
    },
    ProcessingFlatlist_view_image:{
        top:"5@mvs0.5",
        left:"70@ms0.5",
        width:"150@ms0.5",
        height:"170@mvs0.5",
        borderRadius:20,
        zIndex:2,
        ...SHADOW_5,
    },
    ProcessingFlatlist_view:{
        width:"160@ms0.95",
        height:"220@mvs0.4",
        backgroundColor:"#70cbf8",
        borderRadius:20,
        marginVertical:"125@mvs0.5",
        marginHorizontal:"20@ms0.5",
        bottom:"265@mvs0.5",
        right:0,
        zIndex:1
    },
    ProcessingFlatlist_name:{
        justifyContent:'flex-end',
        top:"145@mvs0.5",
        color:'black',
        fontWeight:'bold',
        fontSize:"15@ms0.2",
        marginRight:"5@ms0.5",
        marginLeft:"10@s",
        paddingTop:'10@vs',
    },
    ProcessingFlatlist_local:{
        justifyContent:'flex-end',
        top:"140@mvs0.5",
        color:'green',
        fontSize:"15@ms0.2",
        marginRight:"5@ms0.5",
        marginLeft:"15@s",
        paddingTop:'10@vs'
    },
    //Style lịch hẹn
    CalendarForm:{

    },
    CalendarTitle:{
        fontWeight:'bold',
        fontSize:'30@ms0.3',
        marginTop:'-5@vs',
        marginLeft:'15@s',

    },
    CalendarFlatlist:{
        marginHorizontal:'20@ms0.5',
        marginBottom:'20@mvs0.5'
    },
    CalendarFlatlist_view:{
        backgroundColor:'#FFF',
        width:Dimensions.get('screen').width*0.8,
        height:Dimensions.get('screen').width*0.3,
        borderRadius:10,
        marginLeft:'15@ms0.5',
        flexDirection:"row",
        ...SHADOW_7,
    },
    CalendarFlatlist_view_image:{
        height:Dimensions.get('screen').width*0.25,
        width:Dimensions.get('screen').width*0.2,
        borderRadius:5,
        alignSelf: 'center',
        ...SHADOW_5,
        marginLeft:'10@s'
    },
    CalendarFlatlist_image:{
        height:Dimensions.get('screen').width*0.25,
        width:Dimensions.get('screen').width*0.2,
        alignSelf: 'center',
        borderRadius:5,
    },
    CalendarInfor:{
        flexDirection:'row',

    },
    CalendarIcon:{
        color:'#8D8D8D',
        marginHorizontal:'7.5@s',
    },
    CalendarText:{
        color:'#8D8D8D',
        width:'165@s',
    },
}
);
