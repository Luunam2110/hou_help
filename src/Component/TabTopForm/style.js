import {Dimensions, StyleSheet} from "react-native";
import {
    ScaledSheet,
    verticalScale,
    scale,
    mediumScale,
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';
export default styles = ScaledSheet.create({
    containerHeader: {
        //position:'relative',
        paddingVertical:'10@vs',
        flexDirection: "row",
        width:'100%',
        justifyContent: "space-evenly",
        backgroundColor: "#c6c6c6",
        height:63,
        zIndex:0,
    },
    Text:{
        zIndex:2,
        height: 43,
        width:43,
        fontSize: 15,
        borderRadius: 30,
        fontWeight:'bold',
        padding:11,
        paddingLeft:17,
        borderWidth :2 ,
        borderColor: '#2685DD',
    },
    Line:{
        position:'absolute',
        left:0,
        marginLeft:Dimensions.get('screen').width/4,
        marginTop:29.5,
        width: Dimensions.get('screen').width/2,
        borderWidth: 2,
        borderColor: '#2685DD',
        zIndex: 2,
    }
});
