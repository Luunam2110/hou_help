import React from 'react';
import {
    Dimensions, KeyboardAvoidingView, Platform,
    SafeAreaView, ScrollView, StyleSheet,
    Text, TouchableOpacity,
    View,
    Keyboard
} from "react-native";
import {ProgressStep, ProgressSteps} from "react-native-progress-steps";
import Proof from "../Proof/Proof";
import ConfirmInformation from "../ ConfirmInformation/ConfirmInformation";
import TabTopForm from "../TabTopForm/TabTopForm";
import {Next} from "../../Redux/Actions/FormControlAction";
import connect from "react-redux/lib/connect/connect";
import {styles} from './style';
import TextForm from "../InputForm/TextForm";
import DropDown from "../InputForm/Dropdown";
import Date from "../InputForm/Date";
import DateForm from "../InputForm/Date";
import MultipleSelect from "../InputForm/MultipleSelect";
import Radio from "../../Redux/Recuders/Radio";

const InputType = [
    {
        key:1,
        style:{
            text : "Họ tên",
            type: "Text",
            size: 100,
            value:""
        }
    },
    {
        key:2,
        style:{
            text : "đã từng tham gia các hoạt động khác",
            type: "Radio",
            data: [
                {
                    id:1,
                    label:'có'
                },
                {
                    id:2,
                    label:'không'
                }
            ],
            value:""
        }
    },
    {
        key:3,
        style:{
            text : "ngày sinh",
            type : "Date",
            size: "long",
            value:""
        }

    },
    {
        key:4,
        style:{
            text : "Giới tính",
            type :"DropdownPicker",
            data:["Nam","Nữ"],
            value:""
        }

    },
    {
        key:5,
        style:{
            text:"Mã sinh viên",
            type:"Text",
            size: 15,
            value:""
        }
    },
    {
        key:6,
        style:{
            text:"Lớp",
            type:"Text",
            size:10,
            value:""
        }

    },
    {
        key:7,
        style:{
            text:"Niên khóa",
            type:"Text",
            size:15,
            value:""
        }
    },
    {
        key:8,
        style:{
            text:"Email",
            type:"Text",
            size:100,
            value:""
        }

    },
    {
        key:9,
        style:{
            text :"Số điện thoại",
            type:"Text",
            size:"10",
            value:""
        }

    },
    {
        key:10,
        style:{
            text :"Phương tiện đi lại",
            type:"Text",
            size:"50",
            value:""
        }

    },
    {
        key:11,
        style:{
            text: "danh sách chọn",
            type:"Multiselect",
            data:[
                {
                    value:"lựa chọn 1",
                    id:1,
                    isChecked: false,
                },
                {
                    value:"lựa chọn 2",
                    id:2,
                    isChecked: false,
                },{
                    value:"lựa chọn 3",
                    id:3,
                    isChecked: false,
                },{
                    value:"lựa chọn 4",
                    id:4,
                    isChecked: false,
                },{
                    value:"lựa chọn 5",
                    id:5,
                    isChecked: false,
                },{
                    value:"lựa chọn 6",
                    id:6,
                    isChecked: false,
                },
            ],
            value:[{
                value:"lựa chọn 6",
                id:6,
                isChecked: false,
            }]
        }

    },
]

const Form = ({NextScreen}) => {
    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'marginBottom'}>
            <View style={{flex:1,backgroundColor:'#c6c6c6'}}>
                <View style={[styles.ContainerHeader]}><Text style={styles.Header}>Nhập thông tin </Text></View>
                <View style={[styles.ContainerContent]}>
                    <View style={styles.Content}>
                        <ScrollView>
                            {InputType.map((item,index)=>{
                                switch (item.style.type)
                                {
                                    case "Text":{
                                        return (<TextForm props={item.style} key={item.key}/>)
                                    }
                                    case "Date":{
                                        return (<Date props={item.style} key={item.key}/>)
                                    }
                                    case "DropdownPicker":{
                                        return (<DropDown props={item.style} key={item.key}/>)
                                    }
                                    case "Radio" :{
                                        return (<Radio props ={item.style} key={item.key}/>)
                                    }
                                    case "Multiselect":{
                                        return (<MultipleSelect props={item.style} key={item.key}/>)
                                    }
                                }
                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity
                            onPress={()=>{NextScreen();Keyboard.dismiss()}}
                            style={{padding:0,margin:0}}
                        >
                            <Text style={styles.TextBottom}>Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>

        </KeyboardAvoidingView>

    );
};

const mapDispatchToProps = dispatch => ({
    NextScreen: () => dispatch(Next()),
});


export default connect(null,mapDispatchToProps)(Form);