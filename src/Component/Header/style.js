import {SHADOW_5} from '../../Res/GeneralStyle/generalStyle';
import {sizes} from '../../Res/Size/size';
import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const style=(color)=>{ return ScaledSheet.create({
    //FIXED
    viewHeader_fixed: {
        flexDirection: 'row',
        marginTop:Platform.OS === 'ios' ? '25@mvs' : '5@mvs',
        justifyContent: 'space-between',
        alignSelf:'center',
        width: Dimensions.get('screen').width*0.95
    },
    textHeader_fixed: {
        fontWeight: 'bold',
        color: "#004c92",
        alignSelf: 'center',
    },
    buttonBack_fixed: {
        width: '30@ms1',
        height: '20@ms1',
        paddingTop:'0@ms0.5',
    },

})};
export default style;
