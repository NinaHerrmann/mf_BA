import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    box:{
        width:'50%',
        height:'50%',
        padding:5

    },
    inner:{
        flex:1,
        backgroundColor:'#eee',
        alignItems:'center',
        justifyContent:'center'

    }
    

})
