import React,{useRef} from 'react';
import { Animated,
    Keyboard,
    KeyboardAvoidingView,
    Linking,
    Platform,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView,} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import Icon from '../../Component/Icon/icon';
import {ScaledSheet, verticalScale,scale,mediumScale,moderateScale,moderateVerticalScale} from 'react-native-size-matters';
import styles from './style';
const { width } = Dimensions.get('screen');
//const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);
const DATA = [
    {

        image:require('../../Res/Image/form1.png'),
        name:"Đơn xin xác nhận sinh viên",
        tag:"Làm đơn này khi bạn cần xác nhận là sinh viên đang theo học tại trường"
    },
    {

        image:require('../../Res/Image/form2.png'),
        name:"Đơn xin miễn giảm học phí",
        tag:"Làm đơn này khi bạn nằm trong đối tượng được miễn giảm học phí của trường"
    },
    {

        image:require('../../Res/Image/form1.png'),
        name:"Đơn xin hoãn nghĩa vụ quân sự",
        tag:"Làm đơn này khi bạn đang theo học tại nhà trường mà cần hoãn nghĩa vụ quân sự tại địa phương"
    },
    // {
    //
    //     image:require('../../Res/Image/anh2.jpg'),
    //     name:"Đơn xin thôi học",
    //     tag:"Làm đơn này khi bạn đã quá chán trường chán lớp"
    // },
    // {
    //
    //     image:require('../../Res/Image/anh3.jpg'),
    //     name:"Đơn xin thôi học",
    //     tag:"Làm đơn này khi bạn đã quá chán trường chán lớp"
    // }
]
function Index ({navigation}) {
    const dodai =DATA.length;
    const cx_s=scale(70);
    const cy_s=scale(0);
    const rx_s=scale(300);
    const ry_s=scale(150);
    const OVERFLOW_HEIGHT = 70;
    const ITEM_WIDTH = moderateScale(270,0.5);
    const ITEM_HEIGHT = moderateVerticalScale(300,0.5);
    const SPACING =0;
    const FULL_SIZE=ITEM_WIDTH+ SPACING*2;
    const renderItem=({item, index})=>{
        const scale= scrollx.interpolate({
            inputRange : (dodai-1) != index ?[(index-1) * FULL_SIZE,index * FULL_SIZE,(index+1) * FULL_SIZE]:
                [(index-1) * FULL_SIZE,(index)* FULL_SIZE],
            outputRange: (dodai-1) != index ?[0.6,1,0.6]:[0.7,1.1],
            extrapolateRight: 'clamp'

            // outputRange: [0.6,1,0.6],
            //         extrapolateRight: 'clamp'
        })
        return (
            <TouchableOpacity
                onPress={()=>navigation.navigate('ProgressStep')}
                style={[styles.flat_list,{transform:[{scale}]}]}
                activeOpacity={1}>
                    <Image style={styles.flat_list_img}
                        source={item.image}/>
                    <View style={styles.flat_list_view}>
                    <Text style={[styles.flat_list_name ]}>{item.name} </Text>
                    <Text style={styles.flat_list_tag}
                          numberOfLines={3}
                          ellipsizeMode="tail">{item.tag}</Text>
                    </View>
            </TouchableOpacity>
        )
    }
    const scrollx =React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{flex: 1,backgroundColor: '#faf9f9'}}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'}/>
            <Svg style={{position:'absolute'}}>
                <Ellipse
                    cx={`${cx_s}`}
                    cy={`${cy_s}`}
                    rx={`${rx_s}`}
                    ry={`${ry_s}`}
                    fill="#2685DD"
                />
            </Svg>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text1} >Bạn cần</Text>
                    <TouchableOpacity   style={{marginTop:moderateVerticalScale(18,0.8),position: 'absolute', right: moderateScale(40,0.5)}}
                                        onPress={()=>navigation.navigate('Notification')}>
                        <View style={styles.notify}><Text style={{color:'#FFF'}}>5</Text></View>
                        <Icon name={'bell-o'} type={'FontAwesome'}  size={30} style={styles.icon_bell} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text2}>Hỗ trợ gì ?</Text>
            </View>
            <View style={{ height:Dimensions.get('window').height-moderateVerticalScale(175,0.5),justifyContent:'center'}}>
                <Animated.FlatList
                    data={DATA}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={ITEM_WIDTH}
                    decelerationRate='fast'
                    onScroll={Animated.event(
                        [{nativeEvent:{contentOffset:{x:scrollx}}}],
                        { useNativeDriver:true}
                    )}
                    renderItem={(item)=>renderItem(item)}
                    keyExtractor={(item,index) => index.toString()}
                    style={{flexGrow:0}}/>
            </View>
        </View>
    );
};
export default Index;
