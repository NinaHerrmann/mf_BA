import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    horizontal:{
        width: 200,
        height: 150,
        padding: 10,
        flexDirection: 'row',
        flexWrap:'nowrap'
    },
    vertical:{
        flexDirection:'column',
        width:'100%',
        height:'100%',
        padding:10,
        display:'flex',
        paddingBottom:50,


        

    },
    itemsVertical:{
        
        padding:40,
        borderWidth:2,
        borderColor:"black",
        borderRadius:10,
        display:'flex',
        elevation:1,
        backgroundColor:"#fce49f",
        marginBottom:3

        
        
    }

})
