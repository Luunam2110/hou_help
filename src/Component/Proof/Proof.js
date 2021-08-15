import React, {useState} from 'react';
import {
    View,
    Text, SafeAreaView, TouchableOpacity, StyleSheet, Button, Image, FlatList, Dimensions
} from "react-native";
import {Next, EditImage} from "../../Redux/Actions/FormControlAction";
import connect from "react-redux/lib/connect/connect";
import {styles} from './style';
import * as ImagePicker from 'expo-image-picker';
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";



const Proof = ({NextScreen,editImage,image}) => {

    const renderItem = ({item,index})=>{
        return (
            <View
                style={{
                    flex: 1,
                    zIndex:0,
                    position:'relative',
                    margin: 1
                }}>
                <View style={{width:24,position:'absolute',zIndex:10,top:5,right:5}}>
                    <AntDesign.Button
                        name="close"
                        iconStyle={{marginRight:0,width:24}}
                        backgroundColor={null}
                        onPress={
                            ()=>{
                                image.splice(index,1);
                                editImage([...image]);
                            }
                        }
                        size={24}
                        style={styles.btnCancel}
                        color="#FFFFFF" />
                </View>
                <Image source={{uri:item}} style={{justifyContent: 'center',
                    alignItems: 'center',
                    height: 150,}}/>
            </View>

        )

    }
const [haveImage,setHaveImage]= useState(false);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            editImage([...image,result.uri]);
        }
    };
    const pickCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            editImage([...image,result.uri]);
        }
    };
  return (
      <SafeAreaView style={{flex:1,flexDirection:'column',backgroundColor:'#c6c6c6'}}>
        <View style={[styles.ContainerHeader]}><Text style={styles.Header}>Tải minh chứng</Text></View>
        <View style={[styles.ContainerContent]}>
          <View style={styles.Content}>
              <View style={{ flex: 1 ,borderWidth:2,borderColor:'#e6e6e6',margin:10,marginTop:35}}>
                      <View style={{flexDirection:'row-reverse',paddingRight:20,backgroundColor:'#e6e6e6'}}>
                          <MaterialCommunityIcons.Button
                              iconStyle={{marginRight:0}}
                              style={styles.btnPickImage}
                              backgroundColor={'#e6e6e6'}
                              name="camera-plus"
                              size={25}
                              color="black"
                              onPress={pickCamera} />
                          <MaterialIcons.Button
                              iconStyle={{marginRight:0}}
                              style={styles.btnPickImage}
                              backgroundColor={'#e6e6e6'}
                              name="photo-library"
                              size={25}
                              color="black" onPress={pickImage} />
                      </View>
                  <View style={{padding:10}}>

                  </View>{
                  !haveImage ?
                      <View style={styles.FlagList}><Image source={require('../../Res/Image/image7.png')}
                                                           style={{justifyContent: 'center', alignSelf: 'center',
                          height: 150,width:100}}/>
                          <Text>Minh chứng bao gồm: thẻ sinh viên</Text></View>
                          :
                  <FlatList data={image}
                            horizontal={false}
                            style={styles.FlagList}
                            columnWrapperStyle={{ flex: 1,
                                justifyContent: "space-around"}}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                            renderItem={renderItem}/>
              }


              </View>
          </View>
          <View style={styles.Button}>
            <TouchableOpacity
                onPress={()=>{console.log('ok gg');NextScreen();}}
            >
              <Text style={styles.TextBottom}>Tải lên</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  );
};



const mapDispatchToProps = dispatch => ({
    NextScreen: () => dispatch(Next()),
    editImage:(uri)=> dispatch(EditImage(uri))
});
function mapStateToProps(state) {
    return {
        image: state.FormReducer.image
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Proof);


