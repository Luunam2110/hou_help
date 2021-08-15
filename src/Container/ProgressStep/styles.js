import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    ContainerHeader:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContainerContent:{
        marginTop:-20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header:{
        padding:10,
        paddingLeft:35,
        paddingRight:35,
        fontWeight:"600",
        fontSize:15,
        lineHeight:20,
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset:{
            width: 0, height: -50,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 4,
    },
    Button:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        backgroundColor:'#fff',
        width:'100%'
    },
    TextBottom:{
        padding:10,
        paddingLeft:35,
        paddingRight:35,
        backgroundColor:'#2685DD',
        borderRadius:8,
        fontWeight:"700",
        fontSize:15,
        lineHeight:20,
        color:"#fff",
    },
    Content:{
        flex:9,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#FFF',
        width: '100%',
        height:100,
    }
});
export  default styles;
