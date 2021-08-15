import {Dimensions} from 'react-native';
import { moderateVerticalScale,scale} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
const heightScreen=Dimensions.get('screen').height;
export default ScaledSheet.create({
    headerStyle:{
        flexDirection:'row',
        marginHorizontal:moderateVerticalScale(15,0.3),
        width:'100%',
    },
    timelineContainer: {
        height: heightScreen,
        backgroundColor: '#faf9f9',
    },
    timeline:{
        //backgroundColor: '#C0C0C0',
        borderRadius:20,
    },
    timeStyle:{
        color:"#000"
    },

});
