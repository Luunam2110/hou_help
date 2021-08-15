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
export default styles = ScaledSheet.create({
    text1: {
        color: '#FFF',
        fontSize: '30@ms0.3',
        marginTop: '25@mvs0.8',
        marginLeft: '20@ms',
    },
    text2:{
        color:'#FFF',
        fontSize:'50@ms0.3',
        marginTop: '0@mvs0.3',
        marginLeft:'8@s',
        fontWeight:'bold',
    },
    icon_bell:{
        color:"#FFF",
        //paddingTop:"0@mvs0.5",
        zIndex:1
    },
    notify:{
        width:'18@ms0.3',
        height:'18@ms0.3',
        backgroundColor:'#FF0000',
        alignItems:'center',
        borderRadius:50,
        zIndex:2,
        top:'10@mvs0.5',
        right:'-15@ms0.5'
    },
    flat_list:{
        flex: 1,
        marginRight: "20@ms0.5",
        width:"250@ms0.5",
        height:"400@mvs0.5",
    },
    flat_list_img:{
        width:"200@ms0.5",
        height:"230@mvs0.5",
        top:"20@mvs0.5",
        left:"50@ms0.5",
        borderRadius:20,
        zIndex:2
    },
    flat_list_view:{
        width:"200@ms0.95",
        height:"305@mvs0.5",
        backgroundColor:"#62b1f8",
        borderRadius:20,
        marginVertical:"125@mvs0.5",
        marginHorizontal:"20@ms0.5",
        bottom:"280@mvs0.5",
        right:0,
        zIndex:1
    },
    flat_list_name:{
        justifyContent:'flex-end',
        top:"178@mvs0.5",
        left:"20@ms0.5",
        color:'#000000',
        fontSize:"18@ms0.5",
        fontWeight:'bold',
        marginRight:"20@ms0.5",
    },
    flat_list_tag:{
        top:"170@mvs0.9",
        marginRight:"20@s",
        left:"20@ms0.5",
        fontSize:"15@ms0.5",
    },

}
);

