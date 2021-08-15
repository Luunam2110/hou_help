import React from 'react';
import * as FileSystem from 'expo-file-system';
import {
    Image,
    SafeAreaView,
    Text, TouchableOpacity,
    View,
} from "react-native";
import {styles} from './style';
import PDFReader from 'rn-pdf-reader-js';
import {Button} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import {sizes} from '../../Res/Size/size'

const ConfirmInformation = ({navigation}) => {
    const Submit =()=>{
        navigation.navigate('Home');
    }
    /*const ensureDirExists= async () =>{
           await FileSystem.makeDirectoryAsync(source, { intermediates: true });
   }
   const takePdf = async () => {
       const base64 = await FileSystem.readAsStringAsync(source, { encoding: FileSystem.EncodingType.Base64 });
       console.log('base64');
       console.log(base64);
   };*/
    //const source = 'file://../../Res/Doc/Form.pdf'

    return (
        <SafeAreaView style={{flex:1,flexDirection:'column',backgroundColor:'#c6c6c6'}}>
            <View style={[styles.ContainerHeader]}><Text style={styles.Header}>Xác nhận thông tin</Text></View>
            <View style={[styles.ContainerContent]}>
                <View style={styles.Content}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        width:'100%',
                        padding:10,
                        flexDirection:'column',
                        paddingTop:35}}>
                        <View
                            style={{
                                width:'70%',
                                flex:6,
                                backgroundColor:'#FF0000',
                                borderWidth:1,
                                overflow:'hidden',
                                borderColor:'#e6e6e6'
                            }}>
                            <Image
                                style={{
                                    left:0,
                                    width:'100%',
                                    height:'100%',
                                    position:'absolute',
                                    top:0
                                }}
                                source={require('../../Res/Image/form1.png')}/>

                            {/*<PDFReader
                      source={{uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
                      }}
                  />*/}
                        </View>
                        <TouchableOpacity style={[styles.ButtonSee]} >
                            <AntDesign name="eyeo" size={24} color="#2685DD" style={{lineHeight:30}}/>
                            <Text style={styles.TextBottomSee}>  Xem chi tiết</Text>
                        </TouchableOpacity>
                        <View style={{flex: 2,marginTop:10,marginBottom:20,alignItems: 'center', justifyContent: 'center',}}>
                            <Text
                                style={{color:'#9FA5C0',fontSize:15}}
                            > Xác nhận thông tin lần cuối
                            </Text>
                            <Text
                                style={{color:'#9FA5C0',fontSize:15}}
                            >Với thao tác Gửi yêu cầu, thông tin của bạn
                            </Text>
                            <Text
                                style={{color:'#9FA5C0',fontSize:15}}
                            >sẽ được gửi đến các phòng ban liên quan
                            </Text>
                        </View>

                    </View>


                </View>
                <View style={styles.Button}>
                    <TouchableOpacity
                        onPress={Submit}
                    >

                        <Text style={styles.TextBottom}>Gửi yêu cầu</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};


export default ConfirmInformation;